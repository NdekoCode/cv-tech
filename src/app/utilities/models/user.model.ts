import { Company } from './../libs/types';

export class User {
  id!: number;
  firstName!: string;
  lastName!: string;
  maidenName?: string;
  age?: number;
  gender?: string;
  email!: string;
  phone?: string;
  username?: string;
  password?: string;
  birthDate?: string;
  image!: string;
  company!: Company;
  [key: string]: string | number | undefined | null | object;
}
