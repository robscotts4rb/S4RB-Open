require 'sinatra/base'
require_relative 'models/JsonApi'
require_relative 'models/CPMU'

class Server < Sinatra::Base

  get '/' do
    erb :index
  end

  get '/monthly' do
    api = JsonApi.new
    api_data = api.readAPI()
    @data = CPMU.complaints(api_data)
    erb :'monthly/index'
  end

  get '/quarterly' do
    api = JsonApi.new
    api_data = api.readAPI()
    @data = CPMU.complaints(api_data)
    erb :'quarterly/index'
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
