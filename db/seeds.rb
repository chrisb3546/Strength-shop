# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


category_list = [
    "Barbells",
    "Racks",
    "Plates",
    "Sleds"
]


product_list =[
    
["Olympic Barbell", 100.00, "https://cdn.shopify.com/s/files/1/0332/6297/products/9_OB20-CH_800x800_1024x1024.png?v=1482208037r", "Standard Barbell for weight training", 1],
    
["Strongman Sled", 80.00, "https://www.elitefts.com/media/catalog/product/cache/1/image/1200x/602f0fa2c1f0d1ba5e241f914e856ff9/o/l/old-school-prowler.jpg", "Standard Strong Man Sled", 4],
    
["Power Rack",100.00, "https://cdn.shoplightspeed.com/shops/625965/files/13506753/800x1024x1/fpr5b-power-rack-red-and-black.jpg", "Standard Power Rack", 2]

]


order_list = [
    ["Joe", "Schmo", 0.00]
]
order_product_list =[
    ["Olympic Barbell", 100.00, "https://cdn.shopify.com/s/files/1/0332/6297/products/9_OB20-CH_800x800_1024x1024.png?v=1482208037", "Standard Barbell for weight training", 1, 1],
    ["Strongman Sled", 80.00, "https://www.elitefts.com/media/catalog/product/cache/1/image/1200x/602f0fa2c1f0d1ba5e241f914e856ff9/o/l/old-school-prowler.jpg", "Standard Strong Man Sled", 1, 4],
    ["45 lb Dumbbell Set",100.00, "https://www.johnsonfitness.com/Home/ProductImage?sku=SDX45", "Standard dumbbell", 1, 2]

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