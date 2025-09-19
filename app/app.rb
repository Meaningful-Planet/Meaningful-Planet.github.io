# frozen_string_literal: true

require 'sinatra'
require 'sinatra/reloader' if development?
require 'yaml'

set :views, ['app', 'views']
set :environment, ENV.fetch('RACK_ENV', 'development')
set :server, :puma
set :public_dir, 'public'

get '/' do
  erb :index, layout: :application
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
