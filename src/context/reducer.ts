import type { ActionProps, StateProps } from "../types/context"

export const initialState: StateProps = {
  pokemons: [],
}

export const stateReducer = (state: StateProps, action: ActionProps): StateProps => {
  switch (action.type) {
    case 'SET_POKEMONS':
      return {
        ...state, 
        pokemons: action.payload
      }
  
    default:
      return state
  }
}