Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
    resources :customers do
      resources :invoices do
        resources :items
        resources :payments
      end
    end

    ### INVOICES ###
    get '/open', to:'invoices#open'
    get '/closed', to:'invoices#closed'
    get '/all', to:'invoices#all'

  end



end
