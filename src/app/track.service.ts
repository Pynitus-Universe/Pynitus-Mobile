import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Track, APITrack, tracksFromApiResponse } from './models';
import { logApiError } from './error.component';

@Injectable()
export class TrackService {
  constructor(private http: Http) {};

  private tracksUrl = 'http://127.0.0.1:5000/tracks/all';

  getTracks(): Promise<Track[]> {
    return this.http.get(this.tracksUrl)
                    .toPromise()
                    .then(response => tracksFromApiResponse(response.json() as APITrack[]))
                    .catch(logApiError);
  }
}
