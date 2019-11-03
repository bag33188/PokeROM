export abstract class Rating {
  abstract _id?: string;
  abstract rating: number;
  abstract message?: string;
  abstract date_time: Date;
}
