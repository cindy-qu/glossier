class SubItem < ApplicationRecord
  belongs_to :item
  belongs_to :list
end
