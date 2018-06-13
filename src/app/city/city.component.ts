import { Component, OnInit } from '@angular/core';
import { City } from '../domain/city';
import { ActivatedRoute, Params } from '@angular/router';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city: City;

  constructor(private activedRoute: ActivatedRoute,
              private cityService: CityService) { }

  ngOnInit() {
      this.activedRoute.params.subscribe(
        data => this.onParamChange(data)
      );
  }

  onParamChange(data: Params) {
    const id = data.id;

    this.city = this.cityService.getCityById(id);
  }

}
