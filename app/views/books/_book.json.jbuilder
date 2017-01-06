json.extract! book, :id, :title, :author, :pages, :start_page, :current_page, :finished, :discarded, :created_at, :updated_at
json.url book_url(book, format: :json)