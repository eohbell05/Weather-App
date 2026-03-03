import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  //Makes service available applicaton wide
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient:HttpClient){}
  //Function to get student data from API
  GetStudentData(): Observable<any>{
    return this.httpClient.get('https://api.jsonblob.com/019cadd4-39a3-7297-a08d-17dc18b8e4f4')
  }
  //function to get weather data from OpenWeather API
  GetWeatherData(): Observable<any>{
    //send get request to OpenWeather API for galway
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303')
  }
}
