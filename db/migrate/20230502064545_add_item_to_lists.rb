class AddItemToLists < ActiveRecord::Migration[6.1]
  def change
    add_reference :lists, :item
  end
end
