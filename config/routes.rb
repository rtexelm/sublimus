Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: {format: :json} do
      resources :users, only: [:create]
      resources :carts, only: [:create, :update, :destroy, :show]
      resource :session, only: [:create, :show, :destroy]
      resources :films, only: [:show, :index] 
  end

  get '*path', to: "static_pages#frontend_index"
end
