class Order < ApplicationRecord
    has_many :order_products, dependent: :destroy

    def current_subtotal
        self.order_products
    end

    def update_subtotal(order_product)
        self.sub_total = self.sub_total + order_product.price
        self.save
    end

end
