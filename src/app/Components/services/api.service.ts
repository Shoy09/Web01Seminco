import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'https://backend-seminco.onrender.com/api'; // Reemplaza con la URL de tu API

  constructor(private readonly http: HttpClient) {}

  // Obtener datos
  getDatos(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`);
  }

  // Enviar datos con POST
  postDatos(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data);
  }

  // Actualizar datos con PUT
  putDatos(endpoint: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${endpoint}`, data);
  }

  // Eliminar datos con DELETE
  deleteDatos(endpoint: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${endpoint}`);
  }

  // Método específico para login
  login(codigo_dni: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, { codigo_dni, password });
  }
}
