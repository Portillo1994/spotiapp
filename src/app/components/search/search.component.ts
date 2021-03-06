import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent   {

  artists: any [] = [];
  constructor( private _spoitify: SpotifyService ) { }

  searchArtist(termn: string) {
    this._spoitify.getArtists(termn).subscribe( (data: any) => {
      console.log(data.artists.items);
      this.artists = data.artists.items;
    });
  }

}
