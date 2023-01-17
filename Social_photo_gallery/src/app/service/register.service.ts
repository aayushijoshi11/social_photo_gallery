import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  Email!: String;
 Full_name!: String;
  Password!: String;
  Mobile!: String;
  constructor() { }
}
