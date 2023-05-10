class Item < ApplicationRecord
  # belongs_to :list
  belongs_to :item_category
  has_many :sub_items, dependent: :destroy

  has_many :lists
  has_many :users, through: :lists

  has_many :wishlists
  has_many :users, through: :wishlists

  
end
