import { Component } from '@angular/core';
import { MediaListItem } from './media-list.component';

@Component({
  templateUrl: './app/albums.component.html',
})

export class AlbumsComponent  {
  list: MediaListItem[] = [
    {
      id: 1,
      title: 'Rosenrot',
      subtitle: 'Rammstein',
      img: 'covers/rammstein-rosenrot.jpg'
    },
    {
      id: 2,
      title: 'The Sound of Madness',
      subtitle: 'Shinedown',
      img: 'covers/shinedown-second_chance.png'
    },
    {
      id: 3,
      title: 'Wait and Bleed',
      subtitle: 'Slipknot',
      img: 'covers/slipknot-wait_and_bleed.jpg'
    }
  ];

  onNotifyMainClick(id:number):void {
    // Navigate to album detail view
    alert('Open album detail view for #' + id);
  }

  onNotifyActionClick(id:number):void {
    // En- or Dequeue
    alert('En- or Dequeue #' + id);
  }
}
