class Rom {
  _id?: string;
  userId?: string;
  orderNumber: number;
  fileName: string;
  fileSize: number;
  fileType: string;
  downloadLink: string;
  generation: number;
  boxArtUrl: string;
  gameName: string;
  region: string;
  platform: string;
  description: string;
  genre?: string;
  dateReleased: Date;
  logoUrl: string;
}
export default Rom;
