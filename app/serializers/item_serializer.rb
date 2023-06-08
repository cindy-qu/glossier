class ItemSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :item_detail, :color, :images, :release_date, :original_price, :size, :description, :ingredients, :store_exclusive, :limited_edition, :discontinued
  has_one :item_category
  has_many :sub_items
  has_many :lists
  has_many :wishlists
  has_many :users
end
