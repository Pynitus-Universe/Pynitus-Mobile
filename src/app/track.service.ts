import { Injectable } from '@angular/core';

import { Track } from './models';

@Injectable()
export class TrackService {
  getTracks(): Promise<Track[]> {
    return Promise.resolve([
      {
        id: 1,
        title: 'Benzin',
        album: {
          id: 1,
          title: 'Rosenrot',
          cover: 'covers/rammstein-rosenrot.jpg',
          artist: {
            id: 1,
            name: 'Rammstein'
          },
        },
      },
      {
        id: 2,
        title: 'Mann gegen Mann',
        album: {
          id: 1,
          title: 'Rosenrot',
          cover: 'covers/rammstein-rosenrot.jpg',
          artist: {
            id: 1,
            name: 'Rammstein'
          },
        },
      },
      {
        id: 3,
        title: 'Rosenrot',
        album: {
          id: 1,
          title: 'Rosenrot',
          cover: 'covers/rammstein-rosenrot.jpg',
          artist: {
            id: 1,
            name: 'Rammstein'
          },
        },
      },
      {
        id: 4,
        title: 'Second Chance',
        album: {
          id: 2,
          title: 'The Sound of Madness',
          cover: 'covers/shinedown-second_chance.png',
          artist: {
            id: 2,
            name: 'Shinedown'
          },
        },
      },
      {
        id: 5,
        title: 'The Sound of Madness',
        album: {
          id: 2,
          title: 'The Sound of Madness',
          cover: 'covers/shinedown-second_chance.png',
          artist: {
            id: 2,
            name: 'Shinedown'
          },
        },
      },
      {
        id: 6,
        title: 'Wait and Bleed',
        album: {
          id: 3,
          title: 'Wait and Bleed',
          cover: 'covers/slipknot-wait_and_bleed.jpg',
          artist: {
            id: 3,
            name: 'Slipknot'
          },
        },
      },
    ]);
  }

  getTracksSlowly(): Promise<Track[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getTracks()), 500);
    });
  }
}
