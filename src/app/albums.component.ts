import { Component, OnInit } from '@angular/core';
import { Album, MediaListItem, asMediaListItems } from './models';
import { AlbumService } from './album.service';

@Component({
  templateUrl: './app/albums.component.html',
  providers: [ AlbumService ],
})

export class AlbumsComponent implements OnInit  {
  constructor(private albumService: AlbumService) {}

  list: MediaListItem[] = [];

  ngOnInit(): void {
    this.albumService.getAlbums()
      .then((albums: Album[]) => this.list = asMediaListItems(albums));
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
