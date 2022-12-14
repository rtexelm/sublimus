Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: {format: :json} do
      resources :users, only: [:create]
      resource :session, only: [:create, :show, :destroy]
      resources :films, only: [:show, :index] 
      resources :cart_items, only: [:index, :create, :update, :destroy]
  end

  get '*path', to: "static_pages#frontend_index"
end
