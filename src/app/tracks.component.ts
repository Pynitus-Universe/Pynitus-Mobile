import { Component } from '@angular/core';
import { MediaListItem } from './media-list.component';

@Component({
  templateUrl: './app/tracks.component.html',
})

export class TracksComponent  {
  list: MediaListItem[] = [
    {
      title: 'Benzin',
      subtitle: 'Rosenrot',
      img: 'covers/rammstein-rosenrot.jpg'
    },
    {
      title: 'Mann gegen Mann',
      subtitle: 'Rosenrot',
      img: 'covers/rammstein-rosenrot.jpg'
    },
    {
      title: 'Rosenrot',
      subtitle: 'Rosenrot',
      img: 'covers/rammstein-rosenrot.jpg'
    },
    {
      title: 'Second Chance',
      subtitle: 'Shinedown',
      img: 'covers/shinedown-second_chance.png'
    },
    {
      title: 'The Sound of Madness',
      subtitle: 'Shinedown',
      img: 'covers/shinedown-second_chance.png'
    },
    {
      title: 'Wait and Bleed',
      subtitle: 'Slipknot',
      img: 'covers/slipknot-wait_and_bleed.jpg'
    }
  ];
}
