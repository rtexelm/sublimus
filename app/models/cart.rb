class Cart < ApplicationRecord

  # before_validation :ensure_cart

  belongs_to :user, optional: true
  has_many :cart_items, dependent: :destroy

end

