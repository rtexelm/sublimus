class Api::CartsController < ApplicationController

  def show
    @cart = @current_cart
    render :show
  end

  def destroy
    @current_cart.destroy
    session[:cart_id] = nil
  end

end
