import { Component, OnInit } from '@angular/core';
import { City } from '../domain/city';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CityService } from '../services/city.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city: City;
  url: string;
  data: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private cityService: CityService) {

    this.data = this.activatedRoute.url;

  }

  ngOnInit() {
      this.activatedRoute.params.subscribe(
        data => this.onParamChange(data)
      );
  }

  onParamChange(data: Params) {
    const id = data.id;

    this.city = this.cityService.getCityById(id);
  }

  gotoInicio() {
    this.router.navigate(['home']);
  }

  gotoCurso1() {
    this.router.navigate(['courses/1']);
  }
}
