class OrderSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :sub_total
end
