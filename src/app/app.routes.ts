import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('../components/hero/hero.component').then(m => m.HeroComponent) },
  { path: 'team', loadComponent: () => import('../components/team/team.component').then(m => m.TeamComponent) },
  { path: 'services', loadComponent: () => import('../components/services/services.component').then(m => m.ServicesComponent) },
  { path: 'contact', loadComponent: () => import('../components/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'testemunhos', loadComponent: () => import('../components/testemunhos/testemunhos.component').then(m => m.TestemunhosComponent) },
  // Legal
  { path: 'termos', loadComponent: () => import('../components/legal/terms/terms.component').then(m => m.TermsComponent) },
  { path: 'privacidade', loadComponent: () => import('../components/legal/privacy/privacy.component').then(m => m.PrivacyComponent) },
  { path: '**', redirectTo: '' }
];
