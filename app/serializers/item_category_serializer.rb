class ItemCategorySerializer < ActiveModel::Serializer
  attributes :id, :item_type, :category_image
  has_many :items
end
