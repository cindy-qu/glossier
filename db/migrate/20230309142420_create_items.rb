class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.belongs_to :item_category, null: false, foreign_key: true
      t.string :item_name
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

      t.timestamps
    end
  end
end
