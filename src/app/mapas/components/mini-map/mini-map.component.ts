import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'map-mini-mapa',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit  {

  @Input() lngLat?: [number, number];
  @ViewChild('divMiniMap') divMap?: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {

    if ( !this.divMap?.nativeElement ) throw "Map Div not found";
    if ( !this.lngLat) throw"LngLat nan't be null";
  
    const mapa = new mapboxgl.Map({
      container: this.divMap.nativeElement,             // container ID
      style: 'mapbox://styles/mapbox/streets-v12',      // style URL
      center: this.lngLat,                              // starting position [lng, lat]
      zoom: 15,                                         // starting zoom
      interactive: false
    });

    new mapboxgl.Marker()
      .setLngLat( this.lngLat )
      .addTo(mapa)
  }


}
