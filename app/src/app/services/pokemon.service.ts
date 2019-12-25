import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PokemonPaths } from './pokemon.paths';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  urlPokemon : string;

  constructor(
    private httpClient : HttpClient
  ) { 
    this.urlPokemon = environment.urlApiPokemon;
  }

  public getPokemonTypes() : Observable<any>{
    return this.httpClient.get(`${this.urlPokemon}${PokemonPaths.getTypes}`)
      .pipe(map((response : any) => {
        return response;
      })) as Observable<any>;
  }
  
  public getPokemonsByType(url : string) : Observable<any>{
    return this.httpClient.get(`${url}`)
      .pipe(map((response : any) => {
        return response;
      })) as Observable<any>;
  }

  public getPokemon(url : string[]) : Observable<any>{
    return this.httpClient.get(`${url}`)
      .pipe(map((response : any) => {
        return response;
      })) as Observable<any>;
  }
}
