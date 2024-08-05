class OcrResult < ApplicationRecord
  MOCKS = {
    'l9NwyiI.gif': 'When she says yes, gifs.com',
    'giphy.gif': 'my heart is racing so fast!'
  }

  class << self
    def find(file_name: nil)
      MOCKS[file_name.to_sym] || nil
    end
  end
end
