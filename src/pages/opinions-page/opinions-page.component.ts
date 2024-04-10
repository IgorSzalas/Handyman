import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-opinions-page',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './opinions-page.component.html',
  styleUrl: './opinions-page.component.scss',
})
export class OpinionsPageComponent {}
