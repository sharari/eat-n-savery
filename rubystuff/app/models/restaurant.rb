class Restaurant < ActiveRecord::Base
	has_many :users
	has_many :submissions,through: :users
end
