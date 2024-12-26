import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-screen',
  standalone: false,
  templateUrl: './map-screen.component.html',
  styleUrl: './map-screen.component.css'
})
export class MapScreenComponent implements OnInit {

  constructor(
    private placesService: PlacesService
  ) {};

  get isUserLocationReady(): Boolean {
    return this.placesService.isUserLocationReady;
  };

  ngOnInit(): void {
    console.log(this.placesService.userLocation);
  };

  

}
