class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
    	t.string :name
    	t.string :imageurl
    	t.string :socialmedia1
    	t.string :socialmedia2
    	t.string :menuurl
      t.timestamps null: false
    end
  end
end
