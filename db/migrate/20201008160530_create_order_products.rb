class CreateOrderProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :order_products do |t|
      t.string :name
      t.float :price
      t.string :image
      t.text :description
      t.belongs_to :order, null: false, foreign_key: true
      t.belongs_to :category, null: false, foreign_key: true
      

      t.timestamps
    end
  end
end
