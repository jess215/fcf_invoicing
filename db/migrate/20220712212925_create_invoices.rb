class CreateInvoices < ActiveRecord::Migration[7.0]
  def change
    create_table :invoices do |t|
      t.belongs_to :customer, null: false, foreign_key: true
      t.integer :terms
      t.datetime :invoice_date
      t.boolean :paid, null: false
      t.text :summary
      t.float :tax

      t.timestamps
    end
  end
end
