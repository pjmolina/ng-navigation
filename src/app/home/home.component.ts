import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('voto', [
      state('no', style({
        backgroundColor: '#ffcccc', transform: 'scale(1)', opacity: 0.3, left: '0px'
      })),
      state('si',   style({
        backgroundColor: '#ccffcc', transform: 'scale(1.1)', opacity: 1, left: '100px'
      })),
      state('void',   style({
        backgroundColor: '#fffff', transform: 'scale(1.1)', opacity: 0.0, left: '1000px'
      })),
      transition('no => si', animate('500ms ease-out')),
      transition('si => no', animate('500ms ease-in')),
      transition(':leave', animate('500ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {

  personas = [
    { name: 'Elena', select: false, estado: 'no'},
    { name: 'Marta'},
    { name: 'Alicia'},
    { name: 'Jorge'},
    { name: 'Daniel'},
    { name: 'Marco'},
    { name: 'Pablo'},
    { name: 'Jaime'},
    { name: 'Antonio'},
  ];

  constructor() { }

  ngOnInit() {
    this.personas.forEach(p1 => { p1.estado = 'no'; });
  }
  select(p: any) {
    // this.personas.forEach(p1 => { p1.select = false; });
    p.select =   p.select ? false : true;
    p.estado = p.select ? 'si' : 'no';
  }
  borra(p: any) {
    const index = this.personas.findIndex(p1 => p1 === p);
    this.personas.splice(index, 1);
  }

}
