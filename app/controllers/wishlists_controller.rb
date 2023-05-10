class WishlistsController < ApplicationController
    def index
        lists = Wishlist.all
        render json: lists, include: ['item', 'user','item.item_category'], status: :ok
    end

    def show
        list = Wishlist.find(params[:id])
        render json: list, status: :ok, include: ['item', 'user','item.item_category'], status: :ok
    end

    def create
        list = Wishlist.create!(list_params)
        render json: list, status: :created
    end

    def update
        list = Wishlist.find(params[:id])
        list.update!(list)
        render json: list
    end

    def destroy
        list = Wishlist.find(params[:id])
        list.destroy
        head :no_content
    end

    private

    def list_params()
        params.permit(:user_id, :item_id)
    end
end
