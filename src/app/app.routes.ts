import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'skills', component: Skills },
    { path: 'projects', component: Projects },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
];
