import { Routes } from '@angular/router';
import { HomePage } from './components/pages/home-page/home-page';
import { AboutPage } from './components/pages/about-page/about-page';
import { ProjectsPage } from './components/pages/projects-page/projects-page';
import { ContactPage } from './components/pages/contact-page/contact-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        title: 'Christie B.'
    },
    {
        path: 'about',
        component: AboutPage,
        title: 'About - Christie B.'
    },
    {
        path: 'projects',
        component: ProjectsPage,
        title: 'Projects - Christie B.'
    },
    {
        path: 'contact',
        component: ContactPage,
        title: 'Contact - Christie B.'
    }
];