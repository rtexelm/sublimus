# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Film.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  %w(users films).each do |table_name|
    ApplicationRecord.connection.reset_pk_sequence!(table_name)
  end

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    email: 'demo@user.io', 
    password: 'password'
  )

  # More users
  10.times do 
    User.create!({
      email: Faker::Internet.unique.email,
      password: 'password'
    }) 
  end

  puts "Creating films..."

  random_description = proc { Faker::Books::Lovecraft.paragraphs(number: rand(2..3)).join("\n\n") }
  # Create a film
  Film.create!(
    title: 'Its Dat Film!', 
    director: 'The Guy Directing',
    year: 1969,
    description: 'Construction worker Donald is having a hard time getting anything good to eat since his wife has decided to only cook gourmet foods. That and her constant harping cause him to snap, and he whacks her. Somewhere in the confusion he comes up with a new use for the microwave oven, and begins to eat much better. Soon he\'s experimenting with different recipes. And different meats.',
    price: 49.99
  )

  # More films
  20.times do 
    Film.create!({
      title: Faker::Movie.title, 
      director: Faker::Name.name,
      year: Faker::Number.between(from: 1930, to: 2023),
      description: random_description.call,
      price: Faker::Number.decimal(l_digits: 2, r_digits: 2)
    })
  end

  puts "Done!"
end