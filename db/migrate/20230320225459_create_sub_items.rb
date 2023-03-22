class CreateSubItems < ActiveRecord::Migration[6.1]
  def change
    create_table :sub_items do |t|
      t.string :item_detail
      t.string :color
      t.string :images
      t.string :release_date
      t.float :original_price
      t.string :size
      t.string :description
      t.string :ingredients
      t.boolean :store_exclusive
      t.boolean :limited_edition
      t.boolean :discontinued
      t.belongs_to :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
