import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent   {

  newReleases:  any[] = [];

  constructor( private _spotify: SpotifyService ) {
    _spotify.getNewReleases().subscribe( (data: any) => {
      console.log(data.albums.items);
      this.newReleases = data.albums.items;
    });
   }


}
