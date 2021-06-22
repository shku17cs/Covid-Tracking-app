import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JavatechieCovid19Service {

  constructor(private http:HttpClient) { }

  public covid19Reports()
  {
    return this.http.get<any>("https://corona.lmao.ninja/v2/countries");
  }
}
