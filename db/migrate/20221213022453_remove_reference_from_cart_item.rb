class RemoveReferenceFromCartItem < ActiveRecord::Migration[7.0]
  def change
    remove_reference :cart_items, :user
    add_reference :cart_items, :cart
  end
end
