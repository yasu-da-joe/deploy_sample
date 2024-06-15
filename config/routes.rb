Rails.application.routes.draw do
  resources :tuning, only: [:index]
  resources :unisons, only: [:create]
  root "tuning#index"
end
