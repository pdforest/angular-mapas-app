import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css'],
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef;
  mapa?: Map;
  zoomLevel: number = 16;
  currentLngLat: LngLat = new LngLat(-58.53047845131584, -34.473020487113914); 

  constructor() { }

  ngAfterViewInit(): void {

    if ( !this.divMapa ) throw 'El elemento HTML no fue encontrado';

    this.mapa = new Map({
      container: this.divMapa.nativeElement,        // container ID
      style: 'mapbox://styles/mapbox/streets-v12',  // style URL
      center: this.currentLngLat,                   // starting position [lng, lat]
      zoom: this.zoomLevel                          // starting zoom
    });
    
    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.mapa?.remove();
  }

  mapListeners(){
    if ( !this.mapa ) throw 'Mapa no inicializado';

    this.mapa.on('zoom', (ev) => {
      this.zoomLevel = this.mapa!.getZoom();
    });

    this.mapa.on('zoomend', (ev) => {
      if ( this.mapa!.getZoom() < 18 ) return;
      this.mapa!.zoomTo(18);
    });

    this.mapa.on('move', () => {
      this.currentLngLat = this.mapa!.getCenter();
    });

  }

  zoomOut(){
    this.mapa?.zoomOut();
  }

  zoomIn() {
    this.mapa?.zoomIn();
  }

  zoomChanged(value: string){
    this.zoomLevel = Number(value);
    this.mapa?.zoomTo( this.zoomLevel );
  }

}
