import { Component, OnInit } from '@angular/core';
import { Track, MediaListItem, asMediaListItems } from './models';
import { TrackService } from './track.service';

@Component({
  templateUrl: './app/tracks.component.html',
  providers: [ TrackService ],
})

export class TracksComponent implements OnInit  {
  constructor(private trackService: TrackService) {}

  list: MediaListItem[] = [];

  ngOnInit(): void {
    this.trackService.getTracks()
    .then((tracks: Track[]) => this.list = asMediaListItems(tracks));
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
