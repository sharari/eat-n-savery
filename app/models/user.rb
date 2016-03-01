class User < ActiveRecord::Base
	belongs_to :restaurant
	has_many :submissions
end
