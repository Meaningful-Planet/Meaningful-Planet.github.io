# frozen_string_literal: true

require 'sinatra'
require 'sinatra/reloader' if development?
require 'sinatra/content_for'
require 'yaml'

set :views, ['app', 'views']
set :environment, ENV.fetch('RACK_ENV', 'development')
set :server, :puma
set :public_dir, 'public'

get '/' do
  erb :index, layout: :application
end

get '/business' do
  erb :business, layout: :application
end

get '/solutions' do
  erb :solutions, layout: :application
end

get '/personal' do
  erb :personal, layout: :application
end

get '/plans' do
  erb :plans, layout: :application
end

get '/coverage' do
  erb :coverage, layout: :application
end

get '/impact' do
  erb :impact, layout: :application
end

get '/contact' do
  erb :contact, layout: :application
end

get '/about' do
  erb :about, layout: :application
end

get '/terms-and-conditions' do
  erb :terms_and_conditions, layout: :application
end

get '/modern-slavery-policy' do
  erb :modern_slavery_policy, layout: :application
end

get '/login' do
  redirect 'https://user.meaningfulplanet.co.uk/sign-in', 301
end

get '/articles' do
  redirect 'https://www.meaningfulplanet.co.uk/articles', 301
end

helpers do
  def image_tag(name, params = {})
    "<img src='assets/images/#{name}' alt='#{params[:alt]}' id='#{params[:id]}' class='#{params[:class]}' />"
  end

  def stylesheet_tag(name)
    "<link href='assets/styles/#{name}' rel='stylesheet' type='text/css' />"
  end

  def script_tag(name)
    "<script src='assets/javascript/#{name}'></script>"
  end
end
