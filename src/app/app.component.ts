import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenubarModule,
    CardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'handyman';
  citySearchField: string | undefined
  items = [
    {
        label: 'Strona główna',
        icon: 'pi pi-fw pi-home',
        routerLink:' '
    },
    {
        label: 'Specjaliści w okolicy',
        icon: 'pi pi-fw pi-file',
        items: [
            {
                label: 'Zobacz na mapie',
                icon: 'pi pi-fw pi-map',
                routerLink:'/mapa'
            },
            {
                label: 'Opinie',
                icon: 'pi pi-fw pi-comments',
                routerLink:'/opinie'
            },
        ]
    },

    {
        label: 'Ogłoszenia',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Twoje ogłoszenia',
                icon: 'pi pi-fw pi-briefcase',
                routerLink:'/ogloszenia'
            },
            {
                label: 'Dodaj ogłoszenie',
                icon: 'pi pi-fw pi-pencil',
                routerLink:'/dodaj-ogloszenie'
            },
            {
                label: 'Odpowiedzi na twoje ogłoszenia',
                icon: 'pi pi-fw pi-comments',
                routerLink:'/twoje-ogloszenia'
            },
        ]
    }
];
}
