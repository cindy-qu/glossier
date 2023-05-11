class ItemsController < ApplicationController
    skip_before_action :authorize
    def index
        items = Item.all
        render json: items, status: :ok
    end

    def show
        item = Item.find(params[:id])
        # render json: item, include: ['users.lists', 'users.wishlists'], status: :ok
        render json: item, include: ['lists.user', 'wishlists.user'], status: :ok
    end
end
