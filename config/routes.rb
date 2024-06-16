Rails.application.routes.draw do
  resources :tuning, only: [:index]
  resources :unisons, only: [:index, :new, :create]
  root "tuning#index"
end
