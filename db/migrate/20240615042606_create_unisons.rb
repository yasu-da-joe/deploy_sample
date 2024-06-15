class CreateUnisons < ActiveRecord::Migration[7.1]
  def change
    create_table :unisons do |t|
      t.references :user, null: false, foreign_key: true
      t.float :left_frequency
      t.float :right_frequency

      t.timestamps
    end
  end
end
