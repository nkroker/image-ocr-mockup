class DashboardController < ApplicationController
  def index
  end

  def create
    @ocr_result = OcrResult.find(file_name: upload_params[:file].original_filename)

    if @ocr_result
      render json: { data: { result: @ocr_result } }, status: :ok
    else
      render json: { data: { result: 'unable to perform read' } }, status: :not_found
    end
  end

  private

  def upload_params
    params.permit(:file)
  end
end
