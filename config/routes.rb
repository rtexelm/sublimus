Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: {format: :json} do
      resources :users, only: [:create] do
        resources :cart_items, only: [:index, :create, :update, :destroy]
      end
      resource :session, only: [:create, :show, :destroy]
      resources :films, only: [:show, :index] 
  end

  get '*path', to: "static_pages#frontend_index"
end
