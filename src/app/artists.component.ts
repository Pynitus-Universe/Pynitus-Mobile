import { Component } from '@angular/core';
import { Artist, MediaListItem } from './models';
import { ArtistService } from './artist.service';

@Component({
  templateUrl: './app/artists.component.html',
  providers: [ ArtistService ],
})

export class ArtistsComponent  {
  constructor(private artistService: ArtistService) {}

  list: MediaListItem[] = [];

  ngOnInit(): void {
    this.artistService.getArtistsSlowly().then((artists: Artist[]) => {
      for(var key in artists) {
        var artist = artists[key];

        this.list.push({
          id: artist.id,
          title: artist.name,
          subtitle: '? Albums, ? Tracks',
          img: 'covers/album-placeholder.png',
        });
      }
    });
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
