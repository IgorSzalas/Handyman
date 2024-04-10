import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon'
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import * as Leaflet from 'leaflet';

@Component({
  standalone:true,
  imports:[
    CardModule,
    LeafletModule,
    InputGroupModule,
    InputGroupAddonModule
  ],
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  getLayers = (): Leaflet.Layer[] => {
    return [
      new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      } as Leaflet.TileLayerOptions),
    ] as Leaflet.Layer[];
  };

  getMarkers = (): Leaflet.Marker[] => {
    return [
      new Leaflet.Marker(new Leaflet.LatLng(43.5121264, 16.4700729), {
        icon: new Leaflet.Icon({
          iconSize: [50, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/blue-marker.svg',
        }),
        title: 'Workspace'
      } as Leaflet.MarkerOptions),
      new Leaflet.Marker(new Leaflet.LatLng(43.5074826, 16.4390046), {
        icon: new Leaflet.Icon({
          iconSize: [50, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/red-marker.svg',
        }),
        title: 'Riva'
      } as Leaflet.MarkerOptions),
    ] as Leaflet.Marker[];
  };

  options: Leaflet.MapOptions = {
    layers: this.getLayers(),
    zoom: 12,
    center: new Leaflet.LatLng(43.530147, 16.488932)
  };


  ngOnInit() {
  }

}
