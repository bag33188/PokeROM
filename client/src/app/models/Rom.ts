export class Rom {
  _id?: string;
  user_id?: string;
  order_number: number;
  rom_type: string;
  file_name: string;
  file_size: number;
  file_type: string;
  download_link: string;
  generation: number;
  box_art_url: string;
  game_name: string;
  region: string;
  platform: string;
  description: string;
  genre?: string;
  date_released: Date;
  logo_url: string;
  is_favorite: boolean;
}

