Rails.application.routes.draw do
  
  resources :wishlists
  resources :lists
  resources :users, only: [:create, :update, :destroy]
  resources :sub_items
  resources :item_categories
  resources :items

  default_url_options :host => "http://localhost:3000"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '/search/:search_term', to: 'testsuites#search'
  # # '/search/:search_term', to: 'testsuite#search`
  # get '/search/:search_term', to: `testsuites#search`

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
