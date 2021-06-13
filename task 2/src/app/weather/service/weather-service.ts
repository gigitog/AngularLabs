import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class WeatherService {

    lat!: number;
    lon!: number;

    constructor(private http: HttpClient) {

     }

    getCurrentWeather(): Observable<any[]> {
        return this.http.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + this.lat + '&lon=' + this.lon + '&exclude=minutely,hourly,current&appid=61eff541450a77fb514bf8ae23d39ed2')
        .pipe(map((weather: any) => weather));
    }
}
