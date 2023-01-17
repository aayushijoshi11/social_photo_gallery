import { Injectable } from '@angular/core';
import { RegisterService } from './register.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of, pipe, Subject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
 

@Injectable({
  providedIn: 'root'
})
export class CrudService {
   
    // Node/Express API
    REST_API: string = 'http://localhost:8000/api';
   
    // Http Header
    httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  http: any;
   
    constructor(private httpClient: HttpClient) { }
   
    // Add
    AddRegister(data: RegisterService): Observable<any> {
      let API_URL = `${this.REST_API}/registation`;
      return this.httpClient.post(API_URL, data)
        .pipe(
          catchError(this.handleError)
        )
    }
//Login
Login(username: any, password: any) {
  console.log(username,password);
  let API_URL = `${this.REST_API}/login`;
    return this.httpClient.post(`${API_URL}`, { username, password })
        .pipe(catchError(this.handleError)
        );
}
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);

        ('your login details could not be verified. please try again');
  
  }
}
