class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :first_name
      t.string :last_name
      t.float :sub_total

      t.timestamps
    end
  end
end
