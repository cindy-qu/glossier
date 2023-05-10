class AddItemToWishlists < ActiveRecord::Migration[6.1]
  def change
    add_reference :wishlists, :item
  end
end
