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

ActiveRecord::Schema[7.0].define(version: 2022_07_12_213032) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "customers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "company"
    t.string "customer_cat"
    t.string "phone"
    t.string "mobile"
    t.string "fax"
    t.string "website"
    t.text "street"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.string "country"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "invoices", force: :cascade do |t|
    t.bigint "customer_id", null: false
    t.integer "terms"
    t.datetime "invoice_date"
    t.text "summary"
    t.float "tax"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["customer_id"], name: "index_invoices_on_customer_id"
  end

  create_table "items", force: :cascade do |t|
    t.bigint "invoice_id", null: false
    t.string "name"
    t.float "price"
    t.integer "qty"
    t.text "description"
    t.datetime "service_date"
    t.string "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["invoice_id"], name: "index_items_on_invoice_id"
  end

  add_foreign_key "invoices", "customers"
  add_foreign_key "items", "invoices"
end
