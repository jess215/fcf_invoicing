class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.datetime :date
      t.float :amount
      t.belongs_to :invoice, null: false, foreign_key: true

      t.timestamps
    end
  end
end
