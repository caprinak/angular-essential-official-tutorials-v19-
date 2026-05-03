import { Component } from '@angular/core';
import { HousingLocation } from '../models/housing-location';

@Component({
  selector: 'app-fa-step4',
  standalone: true,
  template: `
    <div class="demo-container">
      <h2>Step 4: Interfaces</h2>
      <p class="step-description">Define a <code>HousingLocation</code> interface to provide type safety for our data.</p>
      <div class="demo-box">
        <div class="code-preview">
          <pre>
export interface HousingLocation {{ '{' }}
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
{{ '}' }}
          </pre>
        </div>
        <div class="data-preview">
          <h4>Example Object:</h4>
          <pre>{{ '{' }}
  id: 0,
  name: "Acme Fresh Start Housing",
  city: "Chicago",
  state: "IL",
  photo: "...",
  availableUnits: 4,
  wifi: true,
  laundry: true
{{ '}' }}</pre>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .demo-container { max-width: 640px; }
    .demo-box { padding: 24px; background: #1e1e2e; color: #cdd6f4; border-radius: 12px; font-family: monospace; }
    .code-preview { margin-bottom: 24px; border-bottom: 1px solid #45475a; padding-bottom: 16px; }
    pre { margin: 0; color: #a6e3a1; }
    h4 { color: #89b4fa; margin-top: 0; }
  `]
})
export class Step4Component {}
