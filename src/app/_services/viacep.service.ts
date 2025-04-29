import { Injectable } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { ViacepResult } from '../-models/ViacepResult';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ViacepService {
  apiUrl: string = enviroment.viaCepUrl;

  constructor(private http: HttpClient) {}

  getEnderecoByCep(cep: string) {
    return this.http.get<ViacepResult>(this.apiUrl + cep + '/json').pipe(
      map((response) => {
        return response;
      })
    );
  }
}
