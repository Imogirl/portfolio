import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Skills } from './components/skills/skills';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'skills', component: Skills }
];
