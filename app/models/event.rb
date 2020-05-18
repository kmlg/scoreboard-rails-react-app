class Event
  include Mongoid::Document
  field :vb_id, type: Integer
  field :sport_id, type: Integer
  field :is_virtual, type: Mongoid::Boolean
  field :event_id, type: Integer
  field :title, type: String
  field :market_id, type: Integer
  field :market_type_id, type: Integer
  field :status_id, type: Integer
  field :score, type: String
  field :description, type: String
  field :start_time, type: Integer
  field :meeting, type: String
  field :meeting_id, type: Integer
  field :media, type: String
  field :american_format, type: Mongoid::Boolean
  field :event_type, type: String
  field :pos, type: Integer
  field :home_team, type: String
  field :away_team, type: String
  field :team_information, type: Mongoid::Boolean
  field :home_score, type: Integer
  field :away_score, type: Integer
  field :period_id, type: Integer
  field :status_type, type: String
  field :status, type: String
  field :total_outcomes, type: Integer
  index({ 'vb_id' => 1 }, { unique: true, drop_dups: true, name: 'event_vb_id_idx' })
  index({ 'sport_id' => 1 })
end
