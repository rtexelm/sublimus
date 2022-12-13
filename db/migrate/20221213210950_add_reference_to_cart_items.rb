class AddReferenceToCartItems < ActiveRecord::Migration[7.0]
  def change
    add_reference :cart_items, :user, null: false, foreign_key: true
    add_index :cart_items, [:user_id, :film_id], unique: true
  end
end
