class WishlistsController < ApplicationController
    def index
        lists = Wishlist.all
        render json: lists, include: ['item', 'user','item.item_category','sub_item'], status: :ok
    end

    def show
        list = Wishlist.find(params[:id])
        render json: list, status: :ok, include: ['item', 'sub_item', 'user','item.item_category'], status: :ok
    end

    def create
        wishlists = Wishlist.create!(list_params)
        render json: wishlists, status: :created
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
        params.require(:wishlist).permit(:user_id, :item_id, :list_type, :sub_item_id)
        
    end
end
