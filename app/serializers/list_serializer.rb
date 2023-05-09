class ListSerializer < ActiveModel::Serializer
  attributes :id, :list_type
  has_one :user
  has_one :item

end
