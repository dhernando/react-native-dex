import React from 'react';
import { PokemonCustom } from '../types/pokemonList';
import { Card } from './Card';

type Props = {
    item: PokemonCustom,
}

const PokemonCard = ({ item }: Props) => {
    const { name, id } = item

    return (
      <Card id={id} name={name}></Card>
    )
}

export const PokedexItem = React.memo(PokemonCard)