import type { PokemonCustom } from './pokemonList';

export type StoreProps = {
  state: StateProps
  dispatch: React.Dispatch<ActionProps>
}

export type ProviderProps = {
  children: React.ReactNode
}

export type StateProps = {
  pokemons: PokemonCustom[];
}

export type ActionProps = 
  | {type: 'SET_POKEMONS', payload: PokemonCustom[]}