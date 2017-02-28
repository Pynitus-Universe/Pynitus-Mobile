import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Artist, MediaListItem, asMediaListItems } from './models';
import { ArtistService } from './artist.service';

import { fatalError } from './error.component';

@Component({
  templateUrl: './app/artists.component.html',
  providers: [ ArtistService ],
})

export class ArtistsComponent implements OnInit  {
  constructor(private router: Router, private artistService: ArtistService) {}

  list: MediaListItem[] = [];

  ngOnInit(): void {
    this.artistService.getArtists()
      .then(
        (artists: Artist[]) => this.list = asMediaListItems(artists),
        (error: any)      => fatalError(this.router, error));
  }

  onNotifyMainClick(id:number):void {
    // Navigate to album detail view
    alert('Open artist detail view for #' + id);
  }

  onNotifyActionClick(id:number):void {
    // En- or Dequeue
    alert('En- or Dequeue #' + id);
  }
}
