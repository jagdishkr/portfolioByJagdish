import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { BlogList } from './components/blog-list/blog-list';
import { BlogDetail } from './components/blog-detail/blog-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog', component: BlogList },
  { path: 'blog/:id', component: BlogDetail },
  { path: '**', redirectTo: '' }
];
