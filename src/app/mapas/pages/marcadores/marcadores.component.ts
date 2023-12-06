import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  lngLat: number[]
}

@Component({
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css'],
  styles: [
  ]
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa?: Map;
  zoomLevel: number = 16;
  currentLngLat: LngLat = new LngLat(-58.53047845131584, -34.473020487113914); 

  public markers: MarkerAndColor[] = [];

  constructor() { }

  ngAfterViewInit(): void {

    if ( !this.divMapa ) throw 'El elemento HTML no fue encontrado';

    this.mapa = new Map({
      container: this.divMapa.nativeElement,        // container ID
      style: 'mapbox://styles/mapbox/streets-v12',  // style URL
      center: this.currentLngLat,                   // starting position [lng, lat]
      zoom: this.zoomLevel                          // starting zoom
    });

    /* const markerHtml = document.createElement('div');
    markerHtml.innerHTML = 'Aqui'

    const marker = new Marker({
      color: 'blue',
      element: markerHtml
    })
    .setLngLat(this.currentLngLat)
    .addTo(this.mapa); */
    
  }

  createMarker() {
    if ( !this.mapa ) return;

    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const lngLat = this.mapa.getCenter();

    this.addMarker( lngLat, color );
  }

  addMarker( lngLat: LngLat, color: string ) {
    if ( !this.mapa ) return;

    const marker = new Marker({
      color: color,
      draggable: true
    })
      .setLngLat( lngLat )
      .addTo( this.mapa );

      this.markers.push({ color, marker, });
  }

  deleteMarker( index: number ) {
    this.markers[index].marker.remove();
    this.markers.splice( index, 1 );
  }

  flyTo( marker: Marker ) {

    this.mapa?.flyTo({
      zoom: this.zoomLevel, //14,
      center: marker.getLngLat()
    });

  }
}
