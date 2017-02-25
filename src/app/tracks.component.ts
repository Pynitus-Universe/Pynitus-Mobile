import { Component, OnInit } from '@angular/core';
import { Track, MediaListItem } from './models';
import { TrackService } from './track.service';

@Component({
  templateUrl: './app/tracks.component.html',
  providers: [ TrackService ],
})

export class TracksComponent implements OnInit  {
  constructor(private trackService: TrackService) {}

  list: MediaListItem[] = [];

  ngOnInit(): void {
    this.trackService.getTracksSlowly().then((tracks: Track[]) => {
      for(var key in tracks) {
        var track = tracks[key];

        this.list.push({
          id: track.id,
          title: track.title,
          subtitle: track.album.artist.name,
          img: track.album.cover,
        });
      }
    });
  }

  onNotifyMainClick(id:number):void {
    // Navigate to track detail view
    alert('Open track detail view for #' + id);
  }

  onNotifyActionClick(id:number):void {
    // En- or Dequeue
    alert('En- or Dequeue #' + id);
  }
}
