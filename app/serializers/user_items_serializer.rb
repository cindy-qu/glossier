class UserItemsSerializer < ActiveModel::Serializer
    attributes :id, :username
    has_many :items
end