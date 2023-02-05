require 'stripe'
require_relative '../../../.stripe_key.rb'

class Api::PaymentsController < ApplicationController
  
  def create

    Stripe.api_key = $stripe_key
    
  end
  
end
