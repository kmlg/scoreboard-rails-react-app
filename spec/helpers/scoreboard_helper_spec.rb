require 'rails_helper'

RSpec.describe ScoreboardHelper, type: :helper do
  describe "fetch live data" do
    it "and saves to database" do
      @livedata = helper.fetch_live_data()
      expect(@livedata).to have_key('sports')
      expect(@livedata['sports'][0]).to have_key('title')
      expect(@livedata['sports'][0]['title']).to eq('Football')
      expect(@livedata).to have_key('events')
      expect(@livedata).to have_key('outcomes')
    end
  end
  describe "retrieve data from database" do
    it "all sports" do
      @sports = helper.getAllSports()
      expect(@sports.count).to be_truthy()
      expect(@sports[0]['title']).to eq('Football')
    end
    it "and has correct order" do
      @sports = helper.getAllSports()
      expect(@sports.count).to be_truthy()
      expect(@sports[0]['pos']).to be <= @sports[1]['pos']
      expect(@sports[1]['pos']).to be <= @sports[2]['pos']
      expect(@sports[2]['pos']).to be <= @sports[3]['pos']
      expect(@sports[0]['title']).to eq('Football')
    end
    it "all events per sport" do
      @sports = helper.getAllSports()
      @events = helper.getEventsPerSport(@sports[2]['vb_id'])
      expect(@events).to be_truthy()
      expect(@events[0]['sport_id']).to eq(@sports[2]['vb_id'])
    end
    it "and has correct order" do
      @sports = helper.getAllSports()
      @events = helper.getEventsPerSport(@sports[2]['vb_id'])
      expect(@events).to be_truthy()
      expect(@events[0]['sport_id']).to eq(@sports[2]['vb_id'])

      expect(@events[0]['pos']).to be <= @events[1]['pos']
      expect(@events[1]['pos']).to be <= @events[2]['pos']
      expect(@events[2]['pos']).to be <= @events[3]['pos']
    end
    it "all outcomes per event" do
      @sports = helper.getAllSports()
      @events = helper.getEventsPerSport(@sports[0]['vb_id'])
      expect(@events).to be_truthy()
      expect(@events[0]['sport_id']).to eq(@sports[0]['vb_id'])
      @outcomes = helper.getOutcomesPerEvent(@events[1]['vb_id'])
      expect(@outcomes).to be_truthy()
      expect(@outcomes[0]['event_id']).to eq(@events[1]['vb_id'])
    end
  end
end
