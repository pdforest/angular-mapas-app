import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  templateUrl: './full-screen.component.html',
  //styleUrls: ['./full-screen.component.css']
   styles: [`
  div {
    width: 100vw;
    height: 100vh;
  }
  `]
})
export class FullScreenComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa?: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    
    if ( !this.divMapa ) throw 'El elemento HTML no fue encontrado';

    const mapa = new mapboxgl.Map({
      //container: 'mapa', // container ID
      container: this.divMapa.nativeElement, // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      //center: [-74.5, 40], // starting position [lng, lat]
      center: [-58.53047845131584, -34.473020487113914],
      zoom: 15 // starting zoom
    });

  }


}
