import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './post/new-post/new-post.component';
import { PostService } from './services/post.service';
import { PostViewComponent } from './post/post-view/post-view.component';

const appRoutes: Routes = [
  { path: 'post', component: PostComponent},
  { path: 'post/add', component: NewPostComponent},
  { path: 'add', component: NewPostComponent},
  { path: '', component: PostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    NewPostComponent,
    PostViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
