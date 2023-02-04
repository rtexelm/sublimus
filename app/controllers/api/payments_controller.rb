require 'stripe'

class Api::PaymentsController < ApplicationController
  
  def create

    Stripe.api_key = 'pk_test_51MXcBcKqBlU1u50lTAHi1JvNzQ3hwmbnlSP55z8IUYsrXyZj60HzAZXi2QkTMKco3HgaGZf6bVv7NZyisND49Kdi00qWdDoabt'
    
  end
  
end
