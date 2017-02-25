import { Injectable } from '@angular/core';

import { Artist } from './models';

@Injectable()
export class ArtistService {
  getArtists(): Promise<Artist[]> {
    return Promise.resolve([
      {
        id: 1,
        name: 'Rammstein'
      },
      {
        id: 2,
        name: 'Shinedown'
      },
      {
        id: 3,
        name: 'Slipknot'
      },
    ]);
  }

  getArtistsSlowly(): Promise<Artist[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getArtists()), 500);
    });
  }
}
