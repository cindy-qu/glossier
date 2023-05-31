class SubItemSerializer < ActiveModel::Serializer
  attributes :id, :color, :item_detail, :images, :release_date, :original_price, :size, :description, :ingredients, :store_exclusive, :limited_edition, :discontinued
  has_one :item
  # has_many :lists
  # has_many :wishlists
  # has_many :users
end
