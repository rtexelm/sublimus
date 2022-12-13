# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  film_id    :bigint           not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
  
  belongs_to :film
  belongs_to :user

  validates :user_id, presence: true
  validates :film_id, presence: true, uniqueness: {scope: :user_id}
  validates :quantity, numericality: {greater_than_or_equal_to: 0}, presence: true

end
