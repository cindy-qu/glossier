Rails.application.routes.draw do
  
  resources :sub_items
  resources :item_categories
  resources :items

  get '/search/:search_term', to: 'testsuites#search'
  # # '/search/:search_term', to: 'testsuite#search`
  # get '/search/:search_term', to: `testsuites#search`

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
