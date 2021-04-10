import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutComponent} from './about/about.component';
import {AlbumListComponent} from './album-list/album-list.component';
import {AlbumDetailsComponent} from './album-details/album-details.component';
import {PhotosComponent} from './photos/photos.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent },
  {path : 'about', component : AboutComponent},
  {path: 'albums', component : AlbumListComponent},
  {path: 'albums/:id', component : AlbumDetailsComponent},
  {path: 'albums/:id/photos', component: PhotosComponent},
  {path : '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
