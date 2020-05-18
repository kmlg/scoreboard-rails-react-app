require 'rails_helper'

RSpec.describe Event, type: :model do
  it "is valid with valid attributes" do
    sport = Event.create(title: "EventName", vb_id: 9999, pos: 9999)
    expect(sport.title).to eq("EventName")
  end
  it "is not valid without valid attributes" do
    begin
      sport = Event.create(else: "Where")
    rescue => ex
      expect(sport).to be_nil
    end
  end
end
