class AddSubItemToWishlist < ActiveRecord::Migration[6.1]
  def change
    add_reference :wishlists, :sub_item
  end
end
