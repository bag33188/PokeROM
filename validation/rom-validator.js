// properties with a value of null do not have a specified min and/or max length.

const romLengths = {
  user_id: null,
  order_number: [0, 88],
  rom_type: [4, 5],
  file_name: [3, 80],
  file_size: [64, 16000000],
  file_type: [2, 3],
  download_link: [8, 1000],
  generation: [1, 8],
  box_art_url: [8, 1000],
  game_name: [2, 42],
  region: [3, 10],
  platform: [2, 50],
  description: [5, 8000],
  genre: [2, 20],
  date_released: null,
  logo_url: [8, 1000],
  is_favorite: null
};

module.exports = romLengths;
