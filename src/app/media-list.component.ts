import { Component, Input } from '@angular/core';

export class MediaListItem {
  title: string;
  subtitle: string;
  img: string;
}

@Component({
  selector: 'media-list',
  templateUrl: './app/media-list.component.html',
})

export class MediaListComponent  {
  @Input() list: MediaListItem[];
}
