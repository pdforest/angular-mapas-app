import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css'],
})
export class FullScreenComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa?: ElementRef;

  ngAfterViewInit(): void {
    
    if ( !this.divMapa ) throw 'El elemento HTML no fue encontrado';

    const mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,             // container ID
      style: 'mapbox://styles/mapbox/streets-v12',       // style URL
      center: [-58.53047845131584, -34.473020487113914], // starting position [lng, lat]
      zoom: 15                                           // starting zoom
    });

  }

}
