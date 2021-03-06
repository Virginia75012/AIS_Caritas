class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home, :owner, :about, :missions, :label ]

  def home
  end

  def owner
  end

  def about
  end

  def missions
  end

  def label
  end

  def dashboard
    @flats = Flat.all.geocoded

    if params[:filter]
      @flats = @flats.where(typology: params[:filter][:typology])
    end

    authorize current_user
    @markers = @flats.map do |flat|
      {
        lat: flat.latitude,
        lng: flat.longitude,
        infoWindow: render_to_string(partial: "info_window", locals: { flat: flat })
      }
    end
  end

end
