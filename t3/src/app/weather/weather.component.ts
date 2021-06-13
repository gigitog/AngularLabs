import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WeatherService } from './service/weather-service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent implements OnInit {

  days: any;
  weatherData: any;
  selectControl!: FormControl;

  constructor(private weatherService: WeatherService) {
    this.weatherService.lon = 30.712481;
    this.weatherService.lat = 46.482952;
  }

    updateWeatherData(value: string): void {
      switch (value) {
        case 'odesa': {
        this.weatherService.lon = 30.712481;
        this.weatherService.lat = 46.482952;
        this.weatherService.getCurrentWeather().subscribe((days => {
          this.setWeatherData(days);
        }));
        break;
      }
      case 'kyiv': {
        this.weatherService.lon = 30.517023;
        this.weatherService.lat = 50.431759;
        this.weatherService.getCurrentWeather().subscribe((days => {
          this.setWeatherData(days);
        }));
        break;
      }
      case 'newyork': {
        this.weatherService.lon = -73.935242;
        this.weatherService.lat = 40.730610;
        this.weatherService.getCurrentWeather().subscribe((days => {
          this.setWeatherData(days);
        }));
        break;
      }
      case 'berlin': {
        this.weatherService.lon = 13.404954;
        this.weatherService.lat = 52.520008;
        this.weatherService.getCurrentWeather().subscribe((days => {
          this.setWeatherData(days);
        }));
        break;
      }
      case 'paris': {
        this.weatherService.lon = 2.349014;
        this.weatherService.lat = 48.864716;
        this.weatherService.getCurrentWeather().subscribe((days => {
          this.setWeatherData(days);
        }));
        break;
      }
      case 'madrid': {
        this.weatherService.lon = -3.703790;
        this.weatherService.lat = 40.416775;
        this.weatherService.getCurrentWeather().subscribe((days => {
          this.setWeatherData(days);
        }));
        break;
      }
}
    }

   setWeatherData(days: any): void {

    this.weatherData = Array.from(days.daily);
    this.days = days;
    console.log(this.days);

    this.weatherData.forEach((day: any) => {
      day.temp.day = this.fixTemp(day.temp.day);
      day.feels_like.day = this.fixTemp(day.feels_like.day);
      day.dt = day.dt * 1000;
    });

    this.weatherData = Array.from(this.weatherData);
  }

  // data initialization
  ngOnInit(): void {
    this.weatherService.getCurrentWeather().subscribe((days => {
      this.setWeatherData(days);
    }));
    this.selectControl = new FormControl();
    }

  // from Kelvin to Farenheit
  fixTemp(currentTemp: number): string {
    return(currentTemp - 273.15).toFixed();
  }
}
