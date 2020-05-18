require 'rails_helper'

RSpec.describe ScoreboardController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "SCOREBOARD" do
    it "should list all sports" do
      get :sports
      sports = JSON.parse(@response.body)
      expect(sports[0]).to have_key('vb_id')
    end
    it "should list all events per sport" do
      get :sports
      sports = JSON.parse(@response.body)
      expect(sports[0]).to have_key('vb_id')

      get :events, :params => { sport_id: sports[0]['vb_id'] }
      events = JSON.parse(@response.body)
      expect(events[0]).to have_key('vb_id')
    end
    it "should list all outcomes per event" do
      get :sports
      sports = JSON.parse(@response.body)
      expect(sports[1]).to have_key('vb_id')

      get :events, :params => { sport_id: sports[1]['vb_id'] }
      events = JSON.parse(@response.body)
      expect(events[0]).to have_key('vb_id')

      get :outcomes, :params => { event_id: events[0]['vb_id'] }
      outcomes = JSON.parse(@response.body)
      expect(outcomes[0]).to have_key('event_id')
    end
  end

end
