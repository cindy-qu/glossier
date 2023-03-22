class Item < ApplicationRecord
  belongs_to :item_category
  has_many :sub_items, dependent: :destroy
end
