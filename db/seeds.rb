# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


category_list = [
    "Barbell",
    "Dumbbell",
    "Plate",
    "Sled"
]


product_list =[
    ["Olympic Barbell", 100.00, "placeholder", "Standard Barbell for weight training", 1],
    ["Strongman Sled", 80.00], "placeholder", "Standard Strong Man Sled", 4,
    ["45 lb Dumbbell Set",100.00, "placeholder", "Standard dumbbell", 2]
]

category_list.each do |name|
    Category.create(name: name)
end

product_list.each do |name, price, image, description, category_id|
    Product.create(name: name, price: price, image: image, description: description, category_id: category_id)
end