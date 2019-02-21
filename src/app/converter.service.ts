import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UnitValue } from './converter/unitvalue';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  private convertUrl = 'http://localhost:8080/convert';

  constructor(private http: HttpClient) { }

  convert(unitValue:UnitValue): Observable<UnitValue> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    return this.http.post<UnitValue>(this.convertUrl, {unit:unitValue.unit,value:unitValue.value}, httpOptions);
  }
}
