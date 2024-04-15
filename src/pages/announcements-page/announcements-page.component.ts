import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-announcements-page',
  standalone: true,
  imports: [CardModule, InputTextModule, ButtonModule],
  templateUrl: './announcements-page.component.html',
  styleUrl: './announcements-page.component.scss',
})
export class AnnouncementsPageComponent {}
