import { Component, OnInit } from '@angular/core';
import { Album, MediaListItem } from './models';
import { AlbumService } from './album.service';

@Component({
  templateUrl: './app/albums.component.html',
  providers: [ AlbumService ],
})

export class AlbumsComponent implements OnInit  {
  constructor(private albumService: AlbumService) {}

  list: MediaListItem[] = [];

  ngOnInit(): void {
    this.albumService.getAlbumsSlowly().then((albums: Album[]) => {
      for(var key in albums) {
        var album = albums[key];

        this.list.push({
          id: album.id,
          title: album.title,
          subtitle: album.artist.name,
          img: album.cover,
        });
      }
    });
  }

  onNotifyMainClick(id:number):void {
    // Navigate to album detail view
    alert('Open album detail view for #' + id);
  }

  onNotifyActionClick(id:number):void {
    // En- or Dequeue
    alert('En- or Dequeue #' + id);
  }
}
