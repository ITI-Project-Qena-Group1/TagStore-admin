import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Iproduct } from '../models/iproduct';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Iuser } from '../models/iuser';
import { Iseller } from '../models/iseller';
import { Iorder } from '../models/iorder';
import { Iemployee } from '../models/iemployee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpOptions ={}
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `${localStorage.getItem('token')}`
        })
    }
   }



  getProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.apiURL}/product`, this.httpOptions );
  }

  getUsers(): Observable<Iuser[]> {
    return this.httpClient.get<Iuser[]>(`${environment.apiURL}/user`, this.httpOptions );
  }

  getSellers(): Observable<Iseller[]> {
    return this.httpClient.get<Iseller[]>(`${environment.apiURL}/seller`, this.httpOptions );
  }

  getOrders(): Observable<Iorder[]> {
    return this.httpClient.get<Iorder[]>(`${environment.apiURL}/order`, this.httpOptions );
  }

  postUsers(newUser: Iuser): Observable<Iuser[]> {
    return this.httpClient.post<Iuser[]>(`${environment.apiURL}/user`, this.httpOptions );
  }

  postSellers(newSeller: Iseller): Observable<Iseller[]> {
    return this.httpClient.post<Iseller[]>(`${environment.apiURL}/seller`, this.httpOptions );
  }

  editUsers(updatedUser: Iuser): Observable<Iuser[]> {
    return this.httpClient.put<Iuser[]>(`${environment.apiURL}/user`, this.httpOptions );
  }

  editSellers(updatedSeller: Iseller): Observable<Iseller[]> {
    return this.httpClient.put<Iseller[]>(`${environment.apiURL}/seller`, this.httpOptions );
  }

  postEmployee(newSeller: Iemployee): Observable<Iseller[]> {
    return this.httpClient.post<Iseller[]>(`${environment.apiURL}/employee`, this.httpOptions );
  }

  editEmployee(updatedUser: Iemployee): Observable<Iuser[]> {
    return this.httpClient.put<Iuser[]>(`${environment.apiURL}/employee`, this.httpOptions );
  }



}
