class Api::CartItemsController < ApplicationController

  def create
    cart = @current_cart
    film = Film.find(params[:film_id])

    if cart.films.include?(film)
      @item = cart.cart_items.find_by(film_id: film.id)
      @item.quantity += 1
    else
      @item = CartItem.new(item_params)
    end

    if @item.save
      render 'api/carts/show'
    else
      render json: @item.errors.full_messages
    end
  end

  def update
    @item = CartItem.find(params[:id])

    if @item.update(item_params)
      render 'api/carts/show'
    else
      render json: @item.errors.full_messages
    end

  end

  def destroy
    @item = CartItem.find(params[:id])
    @item.destroy
    render 'api/carts/show'
  end

  private
  def item_params
    params.require(:cart_item).permit(:cart_id, :film_id, :quantity)
  end

end
