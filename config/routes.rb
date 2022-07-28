Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
    resources :customers do
    end
    resources :invoices do
      resources :items
      resources :payments
    end
  end



end
