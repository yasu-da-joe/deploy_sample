class UnisonsController < ApplicationController
    before_action :authenticate_user!
  
    def create
      @unison = current_user.unisons.build(unison_params)
      if @unison.save
        redirect_to some_path, notice: 'Unison was successfully created.'
      else
        render :new, alert: 'Failed to create Unison.'
      end
    end
  
    private
  
    def unison_params
      params.require(:unison).permit(:left_frequency, :right_frequency)
    end
end