import { Component, inject } from '@angular/core';
import { HousingLocation } from '../models/housing-location';
import { HousingLocationCardComponent } from './step8.component';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-fa-step9',
  standalone: true,
  imports: [HousingLocationCardComponent],
  template: `
    <div class="demo-container">
      <h2>Step 9: Services</h2>
      <p class="step-description">Inject <code>HousingService</code> to retrieve data instead of hardcoding it in the component.</p>
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
export class Step9Component {
  housingService = inject(HousingService);
  housingLocationList: HousingLocation[] = this.housingService.getAllHousingLocations();
}
