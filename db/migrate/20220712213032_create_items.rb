class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.belongs_to :invoice, null: false, foreign_key: true
      t.string :name
      t.float :price
      t.integer :qty
      t.text :description
      t.datetime :service_date
      t.string :category

      t.timestamps
    end
  end
end
