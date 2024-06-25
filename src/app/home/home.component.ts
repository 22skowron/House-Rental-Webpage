import { Component, inject } from '@angular/core';
import { HousLoc } from '../hous-loc';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';
import { Interpolation } from '@angular/compiler';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousLoc[] = [];
  filteredHousingLocationList: HousLoc[] = [];
  housingService: HousingService = inject(HousingService);

  constructor(){
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredHousingLocationList = this.housingLocationList;
  }

  filterResults(inputLocation: string){
    if (inputLocation === ''){
      this.filteredHousingLocationList = this.housingLocationList;
    }
    else {
      this.filteredHousingLocationList = this.housingLocationList.filter(
        hosuingLocation => hosuingLocation.city.toLowerCase().includes(inputLocation.toLowerCase())
      )
    }
  }
}
