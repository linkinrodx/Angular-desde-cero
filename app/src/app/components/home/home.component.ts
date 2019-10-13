import { Component, OnInit, ɵConsole } from '@angular/core';
import { BertoniService } from 'src/app/services/bertoni.service';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private bertoniService : BertoniService
  ) { }

  ngOnInit() {
    this.GetAlbum();
  }

  GetAlbum() {    
    this.bertoniService.GetAlbum().subscribe(
      (response: Album[]) => {
        console.log(response);
      },
      error => console.log(error)
    );
    //this.bertoniService.prueba();
  }

}
