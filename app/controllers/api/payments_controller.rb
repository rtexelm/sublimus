require 'stripe'

class Api::PaymentsController < ApplicationController

  before_action :require_logged_in, only: [:create]
  
  def create

    def calculate_total(user)
      total = 0
      user.cart_items.each do |item|
        total += (item.quantity * item.film.price)
      end
      print total
      return (total.round(2) * 100).to_i
    end

    Stripe.api_key = Rails.application.credentials.stripe[:secret_key]

    payment_intent = Stripe::PaymentIntent.create(
      amount: calculate_total(current_user),
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
