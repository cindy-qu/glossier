class ItemsController < ApplicationController
    def index
        item = Item.all
        render json: item, status: :ok
    end
end
