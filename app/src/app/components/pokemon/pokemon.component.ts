import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonTypes : any[]  = [];
  pokemons : any[] = [];
  formPokemon : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pokemonService : PokemonService
  ) { }

  ngOnInit() {
    this.getTypes();
    this.formPokemon = this.buildForm();
  }
  
  private buildForm(): FormGroup {
    const group: any = {};
    group["type"] = new FormControl();
    
    return this.formBuilder.group(group);
  }

  getTypes(){

    this.pokemonService.getPokemonTypes().subscribe(response => {
      this.pokemonTypes = response.results;
    });

  }

  getPokemonsByType(){
    const type = this.formPokemon.controls.type.value;

    if(!type)
      return;
    
    this.pokemons = [];

    this.pokemonService.getPokemonsByType(type).subscribe(response => {
      var pokemons = [];

      response.pokemon.forEach(poke => {
        this.pokemonService.getPokemon(poke.pokemon.url).subscribe(response => {
          var pokemon = poke;
          pokemon.order = response.order;
          pokemon.sprites = response.sprites;
          
          pokemons.push(pokemon);
        });
      });

      this.pokemons = pokemons.sort((a,b) => a.order - b.order);
      console.log(this.pokemons);
    });
    
  }

}
