import { Component } from '@angular/core';
import { MediaListItem } from './media-list.component';

@Component({
  templateUrl: './app/artists.component.html',
})

export class ArtistsComponent  {
  list: MediaListItem[] = [
    {
      id: 1,
      title: 'Rammstein',
      subtitle: '3 Albums, 10 Tracks',
      img: 'covers/rammstein-rosenrot.jpg'
    },
    {
      id: 2,
      title: 'Shinedown',
      subtitle: '1 Album, 2 Tracks',
      img: 'covers/shinedown-second_chance.png'
    },
    {
      id: 3,
      title: 'Slipknot',
      subtitle: '1 Album, 1 Track',
      img: 'covers/slipknot-wait_and_bleed.jpg'
    }
  ];

  onNotifyMainClick(id:number):void {
    // Navigate to album detail view
    alert('Open artist detail view for #' + id);
  }

  onNotifyActionClick(id:number):void {
    // En- or Dequeue
    alert('En- or Dequeue #' + id);
  }
}
