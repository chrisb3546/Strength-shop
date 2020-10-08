class OrderProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image, :description, :order_id, :category_id
end
