feature "Monthly - Complaints per million units" do
  scenario "I would like to view the monthly complaints" do
    visit('/')
    click_link('By Monthly')
    expect(page).to have_content "Monthly - Complaints per million"
    expect(page).to have_content "Date"
    expect(page).to have_content "CPMU"
    expect(page).to have_content "01"
  end
end
