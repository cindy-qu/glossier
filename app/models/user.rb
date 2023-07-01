class User < ApplicationRecord
    include Rails.application.routes.url_helpers
    has_secure_password
    has_many :lists
    has_many :items, through: :lists
    has_many :wishlists
    has_many :items, through: :wishlists
    has_many :sub_items, through: :items

    has_one_attached :avatar, dependent: :purge

    # validates :password, length: { minimum: 5 }
    # validates :username, :password, presence: true
    validates :username, uniqueness: true
    validates :avatar, content_type: [:png, :jpg, :jpeg], size: { less_than: 3.megabytes , message: '/ Profile Image is too large' }

    def user_image_url
        path = rails_blob_path(self.avatar, only_path: true)
        "http://localhost:3000#{path}"
    end

    
end
