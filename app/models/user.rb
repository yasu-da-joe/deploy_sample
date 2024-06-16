class User < ApplicationRecord
    has_many :unisons, dependent: :destroy

    def self.from_omniauth(access_token)
        data = access_token.info
        user = User.where(email: data['email']).first

        unless user
        user = User.create(
            email: data['email'],
            password: Devise.friendly_token[0,20],
            name: data['name']   # assuming the user model has a name
        )
        end
        user
    end
end