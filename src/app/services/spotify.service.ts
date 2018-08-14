import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private _http: HttpClient ) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      'Authorization' : 'Bearer BQDiRBQtdPAMg4AW43EwSoPvzLoaQ6L0WIUN4Nyid-qsxvRJvOZ03utHDoLU4loQhaX-BkJwlyJc8nccWlqwZp4yGHbMkKBpwR1vyiM4cErQQDNygoeV8izttcOxwnSvY6RPKIeX8yRzyg'
    });
    return this._http.get('https://api.spotify.com/v1/browse/new-releases?country=MX', { headers });
  }

  getArtists(termn: string ) {
    const headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      'Authorization' : 'Bearer BQDiRBQtdPAMg4AW43EwSoPvzLoaQ6L0WIUN4Nyid-qsxvRJvOZ03utHDoLU4loQhaX-BkJwlyJc8nccWlqwZp4yGHbMkKBpwR1vyiM4cErQQDNygoeV8izttcOxwnSvY6RPKIeX8yRzyg'
    });
    return this._http.get(`https://api.spotify.com/v1/search?q=${ termn }&type=artist&market=MX`, { headers });
  }
}
