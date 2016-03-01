class CreateSubmissions < ActiveRecord::Migration
  def change
    create_table :submissions do |t|
    	t.belongs_to :user
    	t.string :food
    	t.integer :cost
    	t.boolean :timesensitive
    	t.datetime :submittime
    	t.datetime :expirationtime
    	t.string :imageurl
    	t.text :description
      t.timestamps null: false
    end
  end
end
