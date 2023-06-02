class Wishlist < ApplicationRecord
    belongs_to :user
    belongs_to :item
    belongs_to :sub_item, optional: true

    validates_uniqueness_of :item_id, :scope => :user_id
end
