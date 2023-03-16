class AddImageCategoryToCategory < ActiveRecord::Migration[6.1]
  def change
    add_column :item_categories, :category_image, :string
  end
end
