import { Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { MapPageComponent } from '../pages/map-page/map-page.component';
import { AddNewAnnouncementPageComponent } from '../pages/add-new-announcement-page/add-new-announcement-page.component';
import { AnnouncementsPageComponent } from '../pages/announcements-page/announcements-page.component';
import { OpinionsPageComponent } from '../pages/opinions-page/opinions-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'mapa',
    component: MapPageComponent,
  },
  {
    path: 'opinie',
    component: OpinionsPageComponent,
  },
  {
    path: 'ogloszenia',
    component: AnnouncementsPageComponent,
  },
  {
    path: 'dodaj-ogloszenie',
    component: AddNewAnnouncementPageComponent,
  },
];
