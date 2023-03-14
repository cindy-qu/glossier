

require 'csv'


CSV.foreach(Rails.root.join('lib/tasks/seed_csv/balm.csv'), headers:true) do |row|
    Item.create({
        item_category_id: row["item_category"],
        item_name: row[0],
        item_detail: row[1],
        color: row["color"],
        images: row["images"],
        release_date: row["release_date"],
        original_price: row["original_price"],
        size: row["size"],
        description: row["description"],
        ingredients: row["ingredients"],
        store_exclusive: row["store_exclusive"],
        limited_edition: row["limited_edition"],
        discontinued: row["discontinued"],
        
    })
end
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


CSV.foreach(Rails.root.join('lib/tasks/seed_csv/category.csv'), headers:true) do |row|
    ItemCategory.create({
        item_type: row[0]
    })
end