import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-route',
  templateUrl: './simple-route.component.html',
  styleUrls: ['./simple-route.component.css']
})
export class SimpleRouteComponent implements OnInit {

  simpleroute = 'Entered in new component created';
  constructor() { }

  ngOnInit() {
  }

}
