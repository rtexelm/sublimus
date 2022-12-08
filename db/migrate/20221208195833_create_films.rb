class CreateFilms < ActiveRecord::Migration[7.0]
  def change
    create_table :films do |t|
      t.string :title, null: false
      t.string :director, null: false
      t.integer :year, null: false
      t.text :description, null: false
      t.float :price, null: false

      t.timestamps
    end
    add_index :films, :title
  end
end
