class OrderProduct < ApplicationRecord
  belongs_to :order
  belongs_to :category
end
