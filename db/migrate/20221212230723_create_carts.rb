class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.timestamps
    end
    add_reference :carts, :cart_item, index: true
  end
end
