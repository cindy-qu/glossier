class ItemCategorySerializer < ActiveModel::Serializer
  attributes :id, :item_type
  has_many :items
end
