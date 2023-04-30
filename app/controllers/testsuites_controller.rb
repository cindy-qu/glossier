
class TestsuitesController < ApplicationController
    def search
        search_term = params[:search_term]
        results = Item.where("lower(item_name) LIKE ?", "%#{search_term.downcase}%")
        results2 = SubItem.where("lower(color) LIKE ?", "%#{search_term.downcase}%")
        results3 = results + results2 
        render json: results3
    end
end
 