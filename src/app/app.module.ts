import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';

import { PynitusComponent }  from './pynitus.component';

import { PlayerComponent }  from './player.component';

import { ArtistsComponent }  from './artists.component';
import { AlbumsComponent }  from './albums.component';
import { TracksComponent }  from './tracks.component';

import { UploadComponent }  from './upload.component';
import { ErrorComponent }  from './error.component';

import { MediaListComponent }  from './media-list.component';

@NgModule({
  imports:      [
  	BrowserModule,
    HttpModule,
  	RouterModule.forRoot([
  	  {
        path: 'artists',
        component: ArtistsComponent
      },
      {
        path: 'albums',
        component: AlbumsComponent
      },
      {
        path: 'tracks',
        component: TracksComponent
      },
      {
        path: 'upload',
        component: UploadComponent
      },
      {
        path: 'error',
        component: ErrorComponent
      },
      {
        path: '',
        redirectTo: '/tracks',
        pathMatch: 'full'
      },
    ])
  ],
  declarations: [
  	PynitusComponent,
    PlayerComponent,
  	ArtistsComponent,
  	AlbumsComponent,
  	TracksComponent,
    UploadComponent,
    ErrorComponent,
    MediaListComponent,
  ],
  bootstrap:    [ PynitusComponent ]
})

export class AppModule { }
