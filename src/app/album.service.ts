import { Injectable } from '@angular/core';

import { Album } from './models';

@Injectable()
export class AlbumService {
  getAlbums(): Promise<Album[]> {
    return Promise.resolve([
      {
        id: 1,
        title: 'Rosenrot',
        cover: 'covers/rammstein-rosenrot.jpg',
        artist: {
          id: 1,
          name: 'Rammstein'
        },
      },
      {
        id: 2,
        title: 'The Sound of Madness',
        cover: 'covers/shinedown-second_chance.png',
        artist: {
          id: 2,
          name: 'Shinedown'
        },
      },
      {
        id: 3,
        title: 'Wait and Bleed',
        cover: 'covers/slipknot-wait_and_bleed.jpg',
        artist: {
          id: 3,
          name: 'Slipknot'
        },
      },
    ]);
  }

  getAlbumsSlowly(): Promise<Album[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getAlbums()), 500);
    });
  }
}
