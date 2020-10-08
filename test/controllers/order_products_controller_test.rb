require 'test_helper'

class OrderProductsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @order_product = order_products(:one)
  end

  test "should get index" do
    get order_products_url, as: :json
    assert_response :success
  end

  test "should create order_product" do
    assert_difference('OrderProduct.count') do
      post order_products_url, params: { order_product: { description: @order_product.description, image: @order_product.image, name: @order_product.name, order_id: @order_product.order_id, price: @order_product.price } }, as: :json
    end

    assert_response 201
  end

  test "should show order_product" do
    get order_product_url(@order_product), as: :json
    assert_response :success
  end

  test "should update order_product" do
    patch order_product_url(@order_product), params: { order_product: { description: @order_product.description, image: @order_product.image, name: @order_product.name, order_id: @order_product.order_id, price: @order_product.price } }, as: :json
    assert_response 200
  end

  test "should destroy order_product" do
    assert_difference('OrderProduct.count', -1) do
      delete order_product_url(@order_product), as: :json
    end

    assert_response 204
  end
end
