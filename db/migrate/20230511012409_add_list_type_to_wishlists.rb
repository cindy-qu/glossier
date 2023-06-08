class AddListTypeToWishlists < ActiveRecord::Migration[6.1]
  def change
    add_column :wishlists, :list_type, :string
  end
end
