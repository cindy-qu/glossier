class WishlistSerializer < ActiveModel::Serializer
  attributes :id, :list_type
  has_one :user
  has_one :item
  has_one :sub_item
end
