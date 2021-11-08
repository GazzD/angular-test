import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamListComponent } from './components/fan-list/team-list.component';
import { FanItemComponent } from './components/fan-item/fan-item.component';

import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { TemplateDrivenAltComponent } from './components/template-driven-alt/template-driven-alt.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TeamListComponent,
    FanItemComponent,
    PostListComponent,
    PostListItemComponent,
    PostDetailComponent,
    PageNotFoundComponent,
    TemplateDrivenFormComponent,
    TemplateDrivenAltComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
