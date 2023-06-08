class User < ApplicationRecord
    has_secure_password
    # has_many :bookmarks, dependent: :destroy
    # has_many :restaurants, dependent: :destroy
    # has_many :bookmarked_restaurants, :through => :bookmarks, :source => :bookmark
    has_many :lists
    has_many :items, through: :lists

    has_many :wishlists
    has_many :items, through: :wishlists

    has_many :sub_items, through: :items

    validates :password, length: { minimum: 5 }
    validates :username, :password, presence: true
    validates :username, uniqueness: true
end
