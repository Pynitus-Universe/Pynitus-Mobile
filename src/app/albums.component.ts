import { Component } from '@angular/core';
import { MediaListItem } from './media-list.component';

@Component({
  templateUrl: './app/albums.component.html',
})

export class AlbumsComponent  {
  list: MediaListItem[] = [
    {
      title: 'Rosenrot',
      subtitle: 'Rammstein',
      img: 'covers/rammstein-rosenrot.jpg'
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
