class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image, :category_id
end
