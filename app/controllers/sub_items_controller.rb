class SubItemsController < ApplicationController
    def index
        subitems = SubItem.all
        render json: subitems, status: :ok
    end

    def show
        subitem = SubItem.find(params[:id])
        render json: subitem, status: :ok
    end
end
