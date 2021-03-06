class CreateBooks < ActiveRecord::Migration[5.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.integer :pages
      t.integer :start_page
      t.integer :current_page
      t.boolean :finished
      t.boolean :discarded

      t.timestamps
    end
  end
end
