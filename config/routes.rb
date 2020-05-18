Rails.application.routes.draw do
  get '', to: 'scoreboard#index'
  get 'scoreboard/sports', to: 'scoreboard#sports'
  get 'scoreboard/events/:sport_id', to: 'scoreboard#events'
  get 'scoreboard/outcomes/:event_id', to: 'scoreboard#outcomes'
  get 'scoreboard/fetch', to: 'scoreboard#fetch'
end
