import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://tribunalvirtual-tsjnay.gob.mx/ApiExhortos/ExamenUnidad2';

  constructor(private http: HttpClient) { }

  enviarDatos(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, datos);
  }

  obtenerProductos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}