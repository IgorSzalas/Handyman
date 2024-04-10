import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
@Component({
  selector: 'app-add-new-announcement-page',
  standalone: true,
  imports: [CardModule, InputTextModule, InputTextareaModule],
  templateUrl: './add-new-announcement-page.component.html',
  styleUrl: './add-new-announcement-page.component.scss',
})
export class AddNewAnnouncementPageComponent {
  value: string | undefined;
}
