class Sport
  include Mongoid::Document
  field :vb_id, type: Integer
  field :title, type: String
  field :is_virtual, type: Mongoid::Boolean
  field :pos, type: Integer
  index({ 'vb_id' => 1 }, { unique: true, drop_dups: true, name: 'sport_vb_id_idx' })
end
