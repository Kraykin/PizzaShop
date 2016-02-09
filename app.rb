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

get '/cart' do
	@orders_input = params[:orders]
	@items = parse_orders_input @orders_input
	
	# <%= Product.find(row[0]).title %>
	# <%= @products.find(row[0]).title %>
	@items.each do |item|
		# [id, cnt]
		item[0] = @products.find(item[0])
	end

	@o = {}

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

	return arr
end		

post '/cart' do
  	@order = Order.new params[:order]
  	@order.save
  	erb "Thank you #{@order.name}! Your order is accepted. <script type=\"text/javascript\">window.localStorage.clear();</script>"
end

get '/all_orders' do
	erb :all_orders
end