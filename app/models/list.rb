class List < ApplicationRecord
  belongs_to :user
  belongs_to :item

  # validates :item_id, uniqueness: true
  # validates_uniqueness_of :item_id, :scope => :list_type
end
