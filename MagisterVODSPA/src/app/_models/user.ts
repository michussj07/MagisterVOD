import {Photo} from './Photo';

export interface User {
  /**Podstawowe informacje*/
  id: number;
  username: string;
  email: string;
  gender: string;
  age: number;
  created: Date;
  lastActive: Date;
  city: string;
  country: string;
  /**Zakładka Dodatkowe Informacje*/
  motto: string;
  interests: string;
  movies: string;
  music: string;
  /**Zakładka Zdjęcia*/
  photos: Photo[];
  photoUrl: string;
}
