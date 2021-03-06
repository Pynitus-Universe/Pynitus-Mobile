import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MediaListItem } from './models';

@Component({
  selector: 'media-list',
  templateUrl: './app/media-list.component.html',
})

export class MediaListComponent  {
  @Input() list: MediaListItem[];
  @Output() notifyMainClick: EventEmitter<number> = new EventEmitter<number>();
  @Output() notifyActionClick: EventEmitter<number> = new EventEmitter<number>();

  onMainClick(id: number) {
    this.notifyMainClick.emit(id);
  }

  onActionClick(id: number) {
    this.notifyActionClick.emit(id);
  }
}
