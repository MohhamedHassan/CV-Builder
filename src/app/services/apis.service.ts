import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http:HttpClient) { }
  getCounter() {
    return this.http.get(`${environment.apiUrl}counter`)
  }
  downloadCV(value:any) {
    return this.http.post(`${environment.apiUrl}template`,value)
  }
}
