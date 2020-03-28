export interface Film {
  id: number;
  filmPhoto: string;
  title: string;
  price: string;
  year: bigint;
  country: string;
  genre: string;
  languageVersion: string;
  rating:string;
  description:string;
  cast:string;
  created: Date;
  toDelete: Date;

}
