require 'rails_helper'

RSpec.describe Outcome, type: :model do
  it "is valid with valid attributes" do
    sport = Outcome.create(market: "MarketName", vb_id: 9999)
    expect(sport.market).to eq("MarketName")
  end
  it "is not valid without valid attributes" do
    begin
      sport = Outcome.create(else: "Where")
    rescue => ex
      expect(sport).to be_nil
    end
  end
end
