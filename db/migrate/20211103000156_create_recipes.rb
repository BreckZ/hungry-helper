class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.integer :serving_size
      t.string :image
      t.string :directions
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
