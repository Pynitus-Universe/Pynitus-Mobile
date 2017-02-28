import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Album, APIAlbum, albumsFromApiResponse } from './models';
import { logApiError } from './error.component';

@Injectable()
export class AlbumService {
  constructor(private http: Http) {};

  private albumsUrl = 'http://127.0.0.1:5000/albums/all';

  getAlbums(): Promise<Album[]> {
    return this.http.get(this.albumsUrl)
                    .toPromise()
                    .then(response => albumsFromApiResponse(response.json() as APIAlbum[]))
                    .catch(logApiError);
  }

}
