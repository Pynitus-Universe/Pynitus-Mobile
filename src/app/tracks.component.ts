import { Component } from '@angular/core';
import { MediaListItem } from './media-list.component';

@Component({
  templateUrl: './app/tracks.component.html',
})

export class TracksComponent  {
  list: MediaListItem[] = [
    {
      id: 1,
      title: 'Benzin',
      subtitle: 'Rosenrot',
      img: 'covers/rammstein-rosenrot.jpg'
    },
    {
      id: 2,
      title: 'Mann gegen Mann',
      subtitle: 'Rosenrot',
      img: 'covers/rammstein-rosenrot.jpg'
    },
    {
      id: 3,
      title: 'Rosenrot',
      subtitle: 'Rosenrot',
      img: 'covers/rammstein-rosenrot.jpg'
    },
    {
      id: 4,
      title: 'Second Chance',
      subtitle: 'Shinedown',
      img: 'covers/shinedown-second_chance.png'
    },
    {
      id: 5,
      title: 'The Sound of Madness',
      subtitle: 'Shinedown',
      img: 'covers/shinedown-second_chance.png'
    },
    {
      id: 6,
      title: 'Wait and Bleed',
      subtitle: 'Slipknot',
      img: 'covers/slipknot-wait_and_bleed.jpg'
    }
  ];

  onNotifyMainClick(id:number):void {
    // Navigate to track detail view
    alert('Open track detail view for #' + id);
  }

  onNotifyActionClick(id:number):void {
    // En- or Dequeue
    alert('En- or Dequeue #' + id);
  }
}
