class GroupUser < ApplicationRecord
  belogns_to :group
  belogns_to :user
end
