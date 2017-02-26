import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Album, APIAlbum, albumsFromApiResponse } from './models';

@Injectable()
export class AlbumService {
  constructor(private http: Http) {};

  private albumsUrl = 'http://127.0.0.1:5000/albums/all';

  getAlbums(): Promise<Album[]> {
    return this.http.get(this.albumsUrl)
                    .toPromise()
                    .then(response => albumsFromApiResponse(response.json() as APIAlbum[]))
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
