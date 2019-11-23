export class Rom {
  public _id?: string;
  public user_id?: string;
  public order_number: number;
  public rom_type: string;
  public file_name: string;
  public file_size: number;
  public file_type: string;
  public download_link: string;
  public generation: number;
  public box_art_url: string;
  public game_name: string;
  public region: string;
  public platform: string;
  public description: string;
  public genre?: string;
  public date_released: Date;
  public logo_url: string;
  public is_favorite: boolean;
}

