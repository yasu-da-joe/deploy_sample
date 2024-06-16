class AddNameToUnisons < ActiveRecord::Migration[7.1]
  def change
    add_column :unisons, :name, :string
  end
end
