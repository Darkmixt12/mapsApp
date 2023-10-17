import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {



  
  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 6;
  public map?: Map;
  public currentLngLat : LngLat = new LngLat(-83.753428, 9.748917)


  ngAfterViewInit(): void {

    if( !this.divMap) throw 'El elemento HTML no fue encontrado'

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/outdoors-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
      });

      this.mapListeners()
  } 

  ngOnDestroy(): void {
    this.map?.remove();
  }



  mapListeners() {
    if (!this.map) throw "Mapa no Inicializado"

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (ev)=> {
      if (this.map!.getZoom() < 18 ) return;
      this.map!.zoomTo(18)
    })

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
      console.log(this.currentLngLat)
    })

    

  }

  zoomIn(){
    this.map?.zoomIn();
  }

  zoomOut(){
    this.map?.zoomOut();
  }

  zoomChanged(value: string) {
    this.zoom =  Number(value);
    this.map?.zoomTo(this.zoom)
  }

  

}
