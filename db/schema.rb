# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_05_11_012409) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "item_categories", force: :cascade do |t|
    t.string "item_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "category_image"
  end

  create_table "items", force: :cascade do |t|
    t.bigint "item_category_id", null: false
    t.string "item_name"
    t.string "item_detail"
    t.string "color"
    t.string "images"
    t.string "release_date"
    t.float "original_price"
    t.string "size"
    t.string "description"
    t.string "ingredients"
    t.boolean "store_exclusive"
    t.boolean "limited_edition"
    t.boolean "discontinued"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["item_category_id"], name: "index_items_on_item_category_id"
  end

  create_table "lists", force: :cascade do |t|
    t.string "list_type"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "item_id"
    t.index ["item_id"], name: "index_lists_on_item_id"
    t.index ["user_id"], name: "index_lists_on_user_id"
  end

  create_table "sub_items", force: :cascade do |t|
    t.string "item_detail"
    t.string "color"
    t.string "images"
    t.string "release_date"
    t.float "original_price"
    t.string "size"
    t.string "description"
    t.string "ingredients"
    t.boolean "store_exclusive"
    t.boolean "limited_edition"
    t.boolean "discontinued"
    t.bigint "item_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["item_id"], name: "index_sub_items_on_item_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "wishlists", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "item_id"
    t.string "list_type"
    t.index ["item_id"], name: "index_wishlists_on_item_id"
    t.index ["user_id"], name: "index_wishlists_on_user_id"
  end

  add_foreign_key "items", "item_categories"
  add_foreign_key "lists", "users"
  add_foreign_key "sub_items", "items"
  add_foreign_key "wishlists", "users"
end
