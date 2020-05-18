module ScoreboardHelper

  def getAllSports
    return Sport.order_by(pos: 1)
  end

  def getEventsPerSport (sport_id)
    return Event.where(sport_id: sport_id).order_by(pos: 1)
  end

  def getOutcomesPerEvent (event_id)
    return Outcome.where(event_id: event_id).order_by(vb_id: 1)
  end

  def fetch_live_data
    uri = Rails.application.config.livefeedURL

    begin
      response = Net::HTTP.get(URI.parse(uri))
    rescue Timeout::Error, Errno::EINVAL, Errno::ECONNRESET, EOFError,
           Net::HTTPBadResponse, Net::HTTPHeaderSyntaxError, Net::ProtocolError => e
      puts "Bad response from server"
    end

    batchData = Hash.new
    batchData["sports"] = Array.new
    batchData["events"] = Array.new
    batchData["outcomes"] = Array.new

    begin
      result = JSON.parse(response)

      if result['sports']
        result['sports'].each { |sport|
          sportData = sport.except('events')
          if sportData['id']
            sportData['vb_id'] = sportData.delete('id')
            batchData['sports'].push(sportData)
            Sport.where(:vb_id => sportData['vb_id']).find_one_and_update({'$set' => sportData}, upsert: true)
          end
          sport['events'].each{ |event|
            eventData = event.except('outcomes')
            eventData['sport_id'] = sport['id']
            eventData['vb_id'] = eventData.delete('id')
            batchData['events'].push(eventData)
            Event.where(:vb_id => eventData['vb_id']).find_one_and_update({'$set' => eventData}, upsert: true)
            event['outcomes'].each {|outcome| 
              outcome['event_id'] = event['id']
              outcome['vb_id'] = outcome.delete('id')
              batchData['outcomes'].push(outcome)
              Outcome.where(:vb_id => outcome['vb_id']).find_one_and_update({'$set' => outcome}, upsert: true)
            }
          }
        }
      end
    rescue JSON::ParserError => e
      puts "Parse error: ", e
    end

    return batchData
  end
end
