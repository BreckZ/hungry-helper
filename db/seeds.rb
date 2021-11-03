# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ingredient.destroy_all
Recipe.destroy_all
User.destroy_all

@admin = User.create!(username: 'breck1', email: 'breck1@email.com', password: '123456')

puts "#{User.count} users created"

@pbj = Recipe.create!(title: 'pbj', serving_size: 8, image: 'image.png', directions: 'Lorem Ipsum', user: @admin)

puts "#{Recipe.count} recipes created"

@basil = Ingredient.create!(food_name: 'pbj', recipe: @pbj)

puts "#{Ingredient.count} ingredients created"