require 'rails_helper'

RSpec.describe "scoreboard/index.html.erb", type: :view do
  it "returns http success" do
    render

    rendered.should have_content("\n")
  end
end
