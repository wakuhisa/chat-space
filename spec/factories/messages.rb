FactoryBot.define do
  factory :message do
    dentent { Faker::Lorem.sentence }
    image { File.open("#{Rails.root}/public/images/test_imgae.jpg") }
    user
    group
  end
end