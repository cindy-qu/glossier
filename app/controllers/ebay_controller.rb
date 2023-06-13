

class EbayController < ApplicationController
    skip_before_action :authorize
    def search

        rest_keywords = params[:keywords]
        response = RestClient::Request.execute(
          method: "GET",
          url: "https://svcs.ebay.com/services/search/FindingService/v1?Operation-Name=findItemsByKeywords&Service-Version=1.0.0&Security-AppName=CindyQu-glossier-PRD-895f6f890-6ebfe8b6&Response-Data-Format=XML&REST-Payload&paginationInput.entriesPerPage=3&keywords=#{rest_keywords}",
          headers: { Authorization: "Bearer #{ENV["EBAY_KEY"]}" }
        )
          results = Hash.from_xml(response).to_json
          render json: results
    end
end
