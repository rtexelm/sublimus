# == Schema Information
#
# Table name: films
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  director    :string           not null
#  year        :integer          not null
#  description :text             not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Film < ApplicationRecord

  validates :title, :description, :director, presence: true
  validates :year, :price, presence: true
end
