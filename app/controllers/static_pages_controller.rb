class StaticPagesController < ApplicationController
  def home
	# id is required to deal with form
	@support = Support.new(:id => 1)  
  end

   def create
    @support = Support.new(params[:support])
      if @support.save
        redirect_to('/', :notice => "Your message was successfully sent.")
      else
        flash.now[:alert] = "Sorry, Something went wrong - try again later"
        render 'home'
      end
  end
  
end
