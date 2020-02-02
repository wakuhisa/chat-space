FactoryBot.define do
  factory :user do
    nickname
    email
    password
    password_confirmation
  end
end