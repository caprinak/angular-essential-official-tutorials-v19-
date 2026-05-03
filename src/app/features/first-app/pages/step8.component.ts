import { Component, input } from '@angular/core';
import { HousingLocation } from '../models/housing-location';

@Component({
  selector: 'app-housing-location-card',
  standalone: true,
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation().photo" [alt]="'Exterior photo of ' + housingLocation().name" />
      <h2 class="listing-heading">{{ housingLocation().name }}</h2>
      <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }}</p>
    </section>
  `,
  styles: [`
    .listing { background: #f8fafc; border-radius: 30px; padding-bottom: 30px; overflow: hidden; border: 1px solid #e2e8f0; }
    .listing-heading { color: #3f51b5; padding: 20px 20px 0 20px; margin: 0; }
    .listing-location { padding: 10px 20px 20px 20px; margin: 0; color: #64748b; }
    .listing-photo { height: 250px; width: 100%; object-fit: cover; }
    .listing-location::before { content: url("/assets/location-pin.svg"); width: 24px; height: 24px; display: inline-block; vertical-align: middle; margin-right: 4px; }
  `]
})
export class HousingLocationCardComponent {
  housingLocation = input.required<HousingLocation>();
}

@Component({
  selector: 'app-fa-step8',
  standalone: true,
  imports: [HousingLocationCardComponent],
  template: `
    <div class="demo-container">
      <h2>Step 8: &#64;for Loop</h2>
      <p class="step-description">Display a list of housing locations using the <code>&#64;for</code> control flow.</p>
      <div class="demo-box">
        <main>
          <header class="brand-name">
            <img class="brand-logo" src="assets/logo.svg" alt="logo" aria-hidden="true" />
          </header>
          <section class="content">
            <form>
              <input type="text" placeholder="Filter by city" />
              <button class="primary" type="button">Search</button>
            </form>
            <section class="results">
              @for (location of housingLocationList; track location.id) {
                <app-housing-location-card [housingLocation]="location" />
              }
            </section>
          </section>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 1000px; }
    .demo-box { background: white; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color); --primary-color: #3f51b5; }
    .brand-name { padding: 12px; border-bottom: 1px solid #e2e8f0; }
    .brand-logo { height: 30px; }
    .content { padding: 24px; }
    input[type="text"] { border: solid 1px var(--primary-color); padding: 10px; border-radius: 8px; margin-right: 4px; width: 30%; }
    button { padding: 10px; border-radius: 8px; border: none; background-color: var(--primary-color); color: white; cursor: pointer; }
    .results { display: grid; column-gap: 14px; row-gap: 14px; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); margin-top: 50px; }
  `]
})
export class Step8Component {
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
}
