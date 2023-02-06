require 'stripe'

class Api::PaymentsController < ApplicationController
  
  def create

    Stripe.api_key = "#{Rails.application.credentials.stripe[:secret_key]}"
    
  end
  
end
