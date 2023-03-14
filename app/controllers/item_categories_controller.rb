class ItemCategoriesController < ApplicationController
    def index
        items = ItemCategory.all
        render json: items, status: :ok
    end

    def show
        item = ItemCategory.find(params[:id])
        render json: item, status: :ok
    end
end
