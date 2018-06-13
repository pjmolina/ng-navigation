import { Injectable } from '@angular/core';
import { City } from '../domain/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  cities: City[];

  constructor() {
    this.cities = [
      { id: 'MAD', name: 'Madrid', population: 5000000, description: 'Capital del reino'},
      { id: 'ALC', name: 'Alicante', population: 1000000, description: 'Levante'},
      { id: 'SVQ', name: 'Sevilla', population: 1500000, description: 'Al sur'},
    ];
  }

  getCities(): City[] {
    return this.cities;
  }
  getCityById(id: string): City {
    return this.cities.find(c => c.id === id);
  }

}
