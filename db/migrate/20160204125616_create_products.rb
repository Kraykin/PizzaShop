class CreateProducts < ActiveRecord::Migration
  def change
  	create_table :products do |t|
		t.string :title
		t.text :description
		t.decimal :price, :size
		t.boolean :is_spicy, :is_veg, :is_best_offer
		t.string :path_to_image
		
		t.timestamps
  	end
  end
end
