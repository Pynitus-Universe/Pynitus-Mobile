import { Component } from '@angular/core';
import { Artist, MediaListItem, asMediaListItems } from './models';
import { ArtistService } from './artist.service';

@Component({
  templateUrl: './app/artists.component.html',
  providers: [ ArtistService ],
})

export class ArtistsComponent  {
  constructor(private artistService: ArtistService) {}

  list: MediaListItem[] = [];

  ngOnInit(): void {
    this.artistService.getArtists()
      .then((artists: Artist[]) => this.list = asMediaListItems(artists));
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
