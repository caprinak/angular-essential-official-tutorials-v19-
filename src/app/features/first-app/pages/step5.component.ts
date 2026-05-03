import { Component, input } from '@angular/core';
import { HousingLocation } from '../models/housing-location';

@Component({
  selector: 'app-housing-location-input',
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
export class HousingLocationInputComponent {
  housingLocation = input.required<HousingLocation>();
}

@Component({
  selector: 'app-fa-step5',
  standalone: true,
  imports: [HousingLocationInputComponent],
  template: `
    <div class="demo-container">
      <h2>Step 5: Inputs</h2>
      <p class="step-description">Use <code>input()</code> to pass data into the <code>HousingLocationComponent</code>.</p>
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
              <app-housing-location-input [housingLocation]="housingLocation" />
            </section>
          </section>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 800px; }
    .demo-box { background: white; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color); --primary-color: #3f51b5; }
    .brand-name { padding: 12px; border-bottom: 1px solid #e2e8f0; }
    .brand-logo { height: 30px; }
    .content { padding: 24px; }
    input[type="text"] { border: solid 1px var(--primary-color); padding: 10px; border-radius: 8px; margin-right: 4px; width: 30%; }
    button { padding: 10px; border-radius: 8px; border: none; background-color: var(--primary-color); color: white; cursor: pointer; }
    .results { display: flex; margin-top: 50px; justify-content: center; }
  `]
})
export class Step5Component {
  readonly housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test City',
    state: 'ST',
    photo: 'https://angular.dev/assets/images/tutorials/common/bernard-hermant-CLKGGw_S6gs-unsplash.jpg',
    availableUnits: 1,
    wifi: true,
    laundry: false,
  };
}
