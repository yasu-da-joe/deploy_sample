class UnisonsController < ApplicationController
    def index
      @unisons = Unison.all
    end
  
    def new
      @unison = Unison.new
    end
  
    def create
      @unison = Unison.new(unison_params)
      if @unison.save
        redirect_to unisons_path, notice: '保存しました'
      else
        render :new, alert: '保存に失敗しました'
      end
    end
  
    private
  
    def unison_params
      params.require(:unison).permit(:name, :left_frequency, :right_frequency)
    end
  end