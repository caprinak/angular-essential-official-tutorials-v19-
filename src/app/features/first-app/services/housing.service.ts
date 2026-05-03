import { Injectable } from '@angular/core';
import { HousingLocation } from '../models/housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://angular.dev/assets/images/tutorials/common/bernard-hermant-CLKGGw_S6gs-unsplash.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: 'https://angular.dev/assets/images/tutorials/common/brandon-griggs-wR11KBaB86U-unsplash.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: 'https://angular.dev/assets/images/tutorials/common/i-ing-09_5pT79Z_4-unsplash.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false,
    }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(location => location.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
