class CreateOrders < ActiveRecord::Migration
  def change
  	create_table :orders do |t|
		t.string :name, :phone
		t.text :address, :orders_input, :order_content
		t.decimal :total_price, :total_qty
		
		t.timestamps
  	end
  end
end
