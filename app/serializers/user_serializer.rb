class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :created_at, :avatar_format
  has_many :lists
  has_many :wishlists
  has_many :items

  def avatar_format
    return unless object.avatar.attached?
    object.avatar.blob.attributes
      .slice('filename', 'byte_size')
      .merge(url: object.user_image_url)
      .tap {|attrs| attrs['name'] = attrs.delete('filename') }
  end

end
