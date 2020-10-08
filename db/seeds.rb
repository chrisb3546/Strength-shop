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


order_list = [
    ["Joe", "Schmo", 0.00]
]
order_product_list =[
    ["Olympic Barbell", 100.00, "https://images.app.goo.gl/PmMQ8JofjELxS2ZB6", "Standard Barbell for weight training", 1, 1],
    ["Strongman Sled", 80.00, "placeholder", "Standard Strong Man Sled", 1, 4],
    ["45 lb Dumbbell Set",100.00, "placeholder", "Standard dumbbell", 1, 2]

]

category_list.each do |name|
    Category.create(name: name)
end

product_list.each do |name, price, image, description, category_id|
    Product.create(name: name, price: price, image: image, description: description, category_id: category_id)
end

order_list.each do |first_name, last_name, sub_total|
    Order.create(first_name: first_name, last_name: last_name, sub_total: sub_total)
end

order_product_list.each do |name, price, image, description, order_id, category_id|
    OrderProduct.create(name: name, price: price, image: image, description: description, order_id: order_id, category_id: category_id)
end