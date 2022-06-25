import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Error404Component } from './components/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostViewComponent,
    PostFormComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
