class Outcome
  include Mongoid::Document
  field :vb_id, type: Integer
  field :event_id, type: Integer
  field :description, type: String
  field :price_decimal, type: String
  field :price, type: String
  field :price_id, type: Integer
  field :print_order, type: Integer
  field :opponent_id, type: Integer
  field :deduction, type: Mongoid::Boolean
  field :sp, type: Mongoid::Boolean
  field :nr, type: Mongoid::Boolean
  field :market, type: String
  field :market_id, type: Integer
  field :race_card_no, type: String
  index({ 'vb_id' => 1 }, { unique: true, drop_dups: true, name: 'outcome_vb_id_idx' })
  index({ 'sport_id' => 1 })
end
