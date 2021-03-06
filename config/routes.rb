Rails.application.routes.draw do
  post "/login", to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get "get_current_user", to: "sessions#get_current_user"
  
  resources :users
  resources :orders do
    resources :order_products
  end
  
  resources :categories do
    resources :products
  end
  resources :products, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
