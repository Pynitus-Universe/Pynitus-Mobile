import { Component } from '@angular/core';
import { MediaListItem } from './media-list.component';

@Component({
  templateUrl: './app/artists.component.html',
})

export class ArtistsComponent  {
  list: MediaListItem[] = [
    {
      title: 'Rammstein',
      subtitle: '3 Albums, 10 Tracks',
      img: 'covers/rammstein-rosenrot.jpg'
    },
    {
      title: 'Shinedown',
      subtitle: '1 Album, 2 Tracks',
      img: 'covers/shinedown-second_chance.png'
    },
    {
      title: 'Slipknot',
      subtitle: '1 Album, 1 Track',
      img: 'covers/slipknot-wait_and_bleed.jpg'
    }
  ];
}
