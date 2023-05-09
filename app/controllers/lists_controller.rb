class ListsController < ApplicationController

    def index
        lists = List.all
        render json: lists, status: :ok
    end

    def show
        list = List.find(params[:id])
        render json: list, status: :ok
    end

    def create
        list = List.create!(list_params)
        render json: list, status: :created
    end

    def update
        list = List.find(params[:id])
        list.update!(list)
        render json: list
    end

    def destroy
        list = List.find(params[:id])
        list.destroy
        head :no_content
    end

    private

    def list_params()
        params.permit(:list_type, :user_id, :item_id)
    end
end
