import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Error404Component} from './components/error404/error404.component';
import {PostFormComponent} from './components/post-form/post-form.component';
import {PostListComponent} from './components/post-list/post-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/inicio'},
  {path: 'inicio', component: PostListComponent},
  {path: 'categoria/:titulo', component: PostListComponent},
  {path: 'nuevo-post', component: PostFormComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
