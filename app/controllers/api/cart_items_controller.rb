class Api::CartItemsController < ApplicationController
  
  def index
    if current_user
      @items = current_user.cart_items
      if @items.empty?
        render json: { errors: ['Your Cart Is Empty']}
      else 
        render :index
      end
    else
      render json: {errors: ['Login To View Cart']}
    end

  end

  def create

    cart = current_user.cart_items
    film = Film.find(params[:film_id])

    if cart.include?(film)
      @item = cart.find_by(film_id: film.id)
      @item.quantity += 1
    else
      @item = CartItem.new(item_params)
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
    user_id = current_user
    params.require(:cart_item).permit(user_id, :film_id, :quantity)
  end

  # def remove_item?(item, quantity)
  #   (item.quantity + quantity) < 1 ? item.destroy : nil
  # end

end
