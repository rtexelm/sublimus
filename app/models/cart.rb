class Cart < ApplicationRecord

  # before_validation :ensure_cart

  belongs_to :user, optional: true
  has_and_belongs_to_many :cart_items, dependent: :destroy

  # def ensure_cart
  #   cart ||= reset_cart!
  # end

  def reset_cart!
    cart = Cart.new()
    cart.save!
    session[:cart] = cart.id
    cart
  end

end

