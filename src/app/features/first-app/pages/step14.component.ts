import { Component, inject, signal, computed, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { HousingLocation } from '../models/housing-location';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-housing-location-final',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="location().photo" [alt]="'Exterior photo of ' + location().name" />
      <h2 class="listing-heading">{{ location().name }}</h2>
      <p class="listing-location">{{ location().city }}, {{ location().state }}</p>
      <button class="details-btn" (click)="onDetails()">Learn More</button>
    </section>
  `,
  styles: [`
    .listing { background: #f8fafc; border-radius: 30px; padding-bottom: 30px; overflow: hidden; border: 1px solid #e2e8f0; display: flex; flex-direction: column; }
    .listing-heading { color: #3f51b5; padding: 20px 20px 0 20px; margin: 0; font-size: 1.4rem; }
    .listing-location { padding: 10px 20px 20px 20px; margin: 0; color: #64748b; }
    .listing-photo { height: 250px; width: 100%; object-fit: cover; }
    .listing-location::before { content: url("/assets/location-pin.svg"); width: 24px; height: 24px; display: inline-block; vertical-align: middle; margin-right: 4px; }
    .details-btn { margin: 0 20px; padding: 10px; background: white; border: 1px solid #3f51b5; color: #3f51b5; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
    .details-btn:hover { background: #3f51b5; color: white; }
  `]
})
export class HousingLocationFinalComponent {
  location = input.required<HousingLocation>();
  showDetails = output<number>();

  onDetails() { this.showDetails.emit(this.location().id); }
}

@Component({
  selector: 'app-fa-step14',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HousingLocationFinalComponent],
  template: `
    <div class="demo-container">
      <h2>Step 14: HTTP & Final App</h2>
      <p class="step-description">The complete Homes application with search, details, and (simulated) HTTP data.</p>

      <div class="demo-box" [class.show-details]="selectedLocation()">
        <main>
          <header class="brand-name">
            <img class="brand-logo" src="assets/logo.svg" alt="logo" aria-hidden="true" />
          </header>

          <section class="content">
            @if (!selectedLocation()) {
              <div class="search-view">
                <form (submit)="filterResults(filter.value); $event.preventDefault()">
                  <input type="text" placeholder="Filter by city" #filter />
                  <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
                </form>
                <section class="results">
                  @for (location of filteredLocationList(); track location.id) {
                    <app-housing-location-final [location]="location" (showDetails)="viewDetails($event)" />
                  }
                </section>
              </div>
            } @else {
              <div class="details-view">
                <button class="back-btn" (click)="selectedLocation.set(null)">← Back to list</button>
                <article>
                  <img class="listing-photo" [src]="selectedLocation()!.photo" />
                  <section class="listing-description">
                    <h2 class="listing-heading">{{ selectedLocation()!.name }}</h2>
                    <p class="listing-location">{{ selectedLocation()!.city }}, {{ selectedLocation()!.state }}</p>
                  </section>
                  <section class="listing-features">
                    <h3 class="section-heading">About this housing location</h3>
                    <ul>
                      <li>Units available: {{ selectedLocation()!.availableUnits }}</li>
                      <li>Does this location have wifi: {{ selectedLocation()!.wifi ? 'Yes' : 'No' }}</li>
                      <li>Does this location have laundry: {{ selectedLocation()!.laundry ? 'Yes' : 'No' }}</li>
                    </ul>
                  </section>
                  <section class="listing-apply">
                    <h3 class="section-heading">Apply now to live here</h3>
                    <form [formGroup]="applyForm" (submit)="submitApplication()">
                      <label for="first-name">First Name</label>
                      <input id="first-name" type="text" formControlName="firstName" />

                      <label for="last-name">Last Name</label>
                      <input id="last-name" type="text" formControlName="lastName" />

                      <label for="email">Email</label>
                      <input id="email" type="email" formControlName="email" />

                      <button type="submit" class="primary">Apply now</button>
                    </form>
                  </section>
                </article>
              </div>
            }
          </section>
        </main>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 1200px; }
    .demo-box { background: white; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color); --primary-color: #3f51b5; }
    .brand-name { padding: 12px; border-bottom: 1px solid #e2e8f0; }
    .brand-logo { height: 30px; }
    .content { padding: 24px; min-height: 500px; }
    input[type="text"], input[type="email"] { border: solid 1px var(--primary-color); padding: 10px; border-radius: 8px; margin-bottom: 10px; width: 100%; }
    .search-view form { display: flex; gap: 8px; margin-bottom: 24px; }
    .search-view input { width: 30%; margin-bottom: 0; }
    .primary { padding: 10px 20px; border-radius: 8px; border: none; background-color: var(--primary-color); color: white; cursor: pointer; font-weight: 600; }
    .results { display: grid; column-gap: 14px; row-gap: 14px; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); }
    .back-btn { background: none; border: none; color: var(--primary-color); cursor: pointer; font-weight: 600; margin-bottom: 16px; }
    .listing-photo { height: 400px; width: 100%; object-fit: cover; border-radius: 20px; }
    .listing-heading { color: var(--primary-color); font-size: 2.5rem; margin-bottom: 0; }
    .listing-location { font-size: 1.5rem; margin: 0 0 24px; color: #64748b; }
    .section-heading { color: var(--primary-color); font-size: 1.5rem; margin-top: 32px; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; }
    ul { list-style: none; padding: 0; }
    li { margin: 8px 0; color: #475569; }
    .listing-apply label { display: block; margin: 16px 0 4px; font-weight: 600; }
    .listing-apply input { max-width: 400px; }
  `]
})
export class Step14Component {
  housingService = inject(HousingService);
  locationList = signal<HousingLocation[]>(this.housingService.getAllHousingLocations());
  filterText = signal('');
  selectedLocation = signal<HousingLocation | null>(null);

  filteredLocationList = computed(() => {
    if (!this.filterText()) return this.locationList();
    return this.locationList().filter(l => l.city.toLowerCase().includes(this.filterText().toLowerCase()));
  });

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  filterResults(text: string) {
    this.filterText.set(text);
  }

  viewDetails(id: number) {
    this.selectedLocation.set(this.housingService.getHousingLocationById(id) || null);
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
    alert('Application submitted successfully!');
    this.applyForm.reset();
  }
}

