import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateDrivenAltComponent } from './components/template-driven-alt/template-driven-alt.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'posts',
    component: PostListComponent,
  },
  {
    path: 'posts/:postId/comments/:commentId',
    component: PostDetailComponent,
  },
  {
    path: 'template-driven-form',
    component: TemplateDrivenFormComponent,
  },
  {
    path: 'template-driven-alt',
    component: TemplateDrivenAltComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
