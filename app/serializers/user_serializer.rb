class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :created_at
  has_many :lists
  has_many :wishlists
  has_many :items
end
