class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image, :category_id
  belongs_to :category

end
