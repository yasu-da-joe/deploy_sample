class User < ApplicationRecord
    has_many :unisons, dependent: :destroy
end