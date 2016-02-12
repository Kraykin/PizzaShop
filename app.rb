#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:pizzashop.db"

class Product < ActiveRecord::Base
end

class Order < ActiveRecord::Base
end

before do
	@products = Product.all
end

get '/' do
	erb :index
end

get '/about' do
	erb :about
end

post '/cart' do
	@orders_input = params[:items_in_cart]
	@items = parse_orders_input @orders_input
	
	# <%= Product.find(row[0]).title %>
	# <%= @products.find(row[0]).title %>
	# @items.each do |item|
	# 	# [id, cnt]
	# 	item[0] = @products.find(item[0])
	# end

	if @items.length == 0
		return erb "Your cart is empty"
	end

	erb :cart
end

def parse_orders_input orders_input
	s1 = orders_input.split(/,/)
	arr = []

	s1.each do |x|
		s2 = x.split(/\=/)
		s3 = s2[0].split(/_/)
		id = s3[1]
		cnt = s2[1]
		arr2 = [id, cnt]
		arr.push arr2
	end

	arr.each do |item|
		# [id, cnt]
		item[0] = @products.find(item[0])
	end

	return arr
end		

post '/orders/new' do
  	#params[:order].store :order_content, @items.join(", ")
  	@full_order = params[:order]
  	
  	arr = parse_orders_input(@full_order[:orders_input])
	arr.each do |item|
		# [id, cnt]
		item[0] = @products.find(item[0]).title
	end
  	@full_order[:order_content] = arr.join(", ")

  	@done_order = Order.new @full_order
  	@done_order.save
  	erb :new
end

get '/orders' do
	@all_orders = Order.all
	erb :orders
end