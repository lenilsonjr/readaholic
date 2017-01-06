class Book < ApplicationRecord

  validates :title, presence: true
  validates :author, presence: true
  validates :pages, presence: true
  validates :current_page, presence: true

end
