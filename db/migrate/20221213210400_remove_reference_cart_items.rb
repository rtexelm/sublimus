class RemoveReferenceCartItems < ActiveRecord::Migration[7.0]
  def change
    remove_reference :cart_items, :cart
    drop_table :carts
  end
end
