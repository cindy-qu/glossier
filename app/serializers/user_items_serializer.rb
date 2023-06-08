class UserItemsSerializer < ActiveModel::Serializer
    attributes :id, :username
    has_many :items
    has_many :sub_items
end