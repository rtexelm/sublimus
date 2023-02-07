require 'stripe'

class Api::PaymentsController < ApplicationController

  # before_action :require_logged_in, only: [:create]
  
  def create

    Stripe.api_key = "#{Rails.application.credentials.stripe[:secret_key]}"

    payment_intent = Stripe::PaymentIntent.create (
      amount: 1000,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true
      }
    )

    render json: {
      client_secret: payment_intent["client_secret"]
    }
    
  end
  
end
