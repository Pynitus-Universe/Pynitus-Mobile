import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Track, APITrack, tracksFromApiResponse } from './models';

@Injectable()
export class TrackService {
  constructor(private http: Http) {};

  private tracksUrl = 'http://127.0.0.1:5000/tracks/all';

  getTracks(): Promise<Track[]> {
    return this.http.get(this.tracksUrl)
                    .toPromise()
                    .then(response => tracksFromApiResponse(response.json() as APITrack[]))
                    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
