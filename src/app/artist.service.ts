import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Artist, APIArtist, artistsFromApiResponse } from './models';

@Injectable()
export class ArtistService {
  constructor(private http: Http) {};

  private artistsUrl = 'http://127.0.0.1:5000/artists/all';

  getArtists(): Promise<Artist[]> {
    return this.http.get(this.artistsUrl)
                    .toPromise()
                    .then(response => artistsFromApiResponse(response.json() as APIArtist[]))
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
