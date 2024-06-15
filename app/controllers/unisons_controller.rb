class UnisonsController < ApplicationController
before_action :authenticate_user!, only: [:create]
    def create
      @unison = current_user.unisons.build(unison_params)
      if @unison.save
        redirect_to some_path, notice: '保存しました'
      else
        render :new, alert: '保存に失敗しました'
      end
    end
    
    private
  
    def unison_params
      params.require(:unison).permit(:left_frequency, :right_frequency)
    end

  end