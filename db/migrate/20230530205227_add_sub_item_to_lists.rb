class AddSubItemToLists < ActiveRecord::Migration[6.1]
  def change
    add_reference :lists, :sub_item
  end
end
