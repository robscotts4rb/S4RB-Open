require 'net/http'
require 'json'

class JsonApi
  APIURL = "http://localhost:3000/CPMU"

  def readAPI(url=APIURL)
    begin
      response = Net::HTTP.get URI(url)
      JSON.parse(response)
    rescue
      {}
    end
  end

end
