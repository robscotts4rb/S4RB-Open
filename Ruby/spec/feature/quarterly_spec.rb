feature "Quarterly - Complaints per million units" do
  scenario "I would like to view the quarterly complaints" do
    visit('/')
    click_link('By Quarterly')
    expect(page).to have_content "Quarterly - Complaints per million"
    expect(page).to have_content "Quarterly"
    expect(page).to have_content "CPMU"
    expect(page).to have_content "1"
  end
end
