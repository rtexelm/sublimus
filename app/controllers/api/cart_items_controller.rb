class Api::CartItemsController < ApplicationController
  
  def index
    @items = @current_user.cart_items
    render :index
  end

  def create

    cart = @current_user.cart_items
    film = Film.find(params[:film_id])

    if cart.include?(film)
      @item = cart.find_by(film_id: film.id)
      @item.quantity += 1
    else
      @item = CartItem.new(user_id: @current_user, item_params)
    end

    if @item.save
      render :index
    else
      render json: @item.errors.full_messages
    end
  end

  def update
    @item = CartItem.find(params[:id])

    if @item.update(item_params)
      render :index
    else
      render json: @item.errors.full_messages
    end

  end

  def destroy
    @item = CartItem.find(params[:id])
    if @item.destroy
      render :index
    else
      render json: @item.errors.full_messages
    end
  end

  private
  def item_params
    params.require(:cart_item).permit(:film_id, :quantity)
  end

  # def remove_item?(item, quantity)
  #   (item.quantity + quantity) < 1 ? item.destroy : nil
  # end

end
