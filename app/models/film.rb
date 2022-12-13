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
  validates :year, inclusion: { in: 1850..2024, message: 'Must be within years of film existence' }, presence: true
  validates :price, numericality: {  greater_than: 0, message: 'Cannot be free or less' }, presence: true
  
end
