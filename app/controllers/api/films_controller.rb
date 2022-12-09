class Api::FilmsController < ApplicationController

  def index
    @films = Film.all
    render :index
  end

  def show
    @film = Film.find(params[:id])
    render :show
  end

end
