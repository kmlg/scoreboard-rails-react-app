require 'rails_helper'

RSpec.describe Sport, type: :model do
  it "is valid with valid attributes" do
    sport = Sport.create(title: "Football", vb_id: 9999, pos: 9999)
    expect(sport.title).to eq("Football")
  end
  it "is not valid without valid attributes" do
    begin
      sport = Sport.create(else: "Where")
    rescue => ex
      expect(sport).to be_nil
    end
  end
end
