class ChangeCartItems < ActiveRecord::Migration[7.0]
  def change
    change_column_null :cart_items, :cart_id, false
  end
end
