class ScoreboardController < ApplicationController
  def index
  end
  def sports
    @sports = helpers.getAllSports()
    render json: @sports
  end
  def events
    @events = helpers.getEventsPerSport(params[:sport_id])
    render json: @events
  end
  def outcomes
    @outcomes = helpers.getOutcomesPerEvent(params[:event_id])
    render json: @outcomes
  end
  def fetch
    @livedata = helpers.fetch_live_data()
    render json: @livedata
  end
end
