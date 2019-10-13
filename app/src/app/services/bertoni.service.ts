import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class BertoniService {

  constructor(private http: HttpClient) { }
  
  GetAlbum() : Observable<Album[]> {
    var link = environment.urlApiBertoni + 'albums';

    /*return this.http.post(link, null)
      .pipe(map((response: Album[]) => {
        debugger;
        return response;
      })) as Observable<Album[]>;*/
    
      debugger;
    var prueba = this.http.get<Album[]>(link);
      
    return prueba;
  }

}