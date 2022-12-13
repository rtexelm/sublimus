class RemoveCartItemIdFromCarts < ActiveRecord::Migration[7.0]
  def change
    remove_reference :carts, :cart_item, index: true
  end
end
