import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TreeError } from '@angular/compiler';
import { PostsComponent } from './posts/posts.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TreeComponent } from './tree/tree.component';


const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'posts', component: PostsComponent },
  { path:'events', component: EventsComponent },
  { path:'gallery', component: GalleryComponent },
  { path:'tree', component: TreeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
