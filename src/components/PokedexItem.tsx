import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { PokemonCustom } from '../types/pokemonList';
import { getImageColors } from '../utils/getColors';
import { Card } from './Card';

type Props = {
    item: PokemonCustom,
}
const DEFAULT_COLOR = '#f5f5f5'

const PokemonCard = ({ item }: Props) => {
    const [background, setBackground] = useState(DEFAULT_COLOR)
    const { picture, name, id } = item

    const getPictureColors = useCallback(
        async () => {
            const [primary = DEFAULT_COLOR] = await getImageColors(picture)
            setBackground(primary)
        },
        [picture],
    )

    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            getPictureColors()
        }

        return () => {
            isMounted = false
        }
    }, [])

    if (background === DEFAULT_COLOR) {
        return <Card id={id} name={name} pokeballColor='gray' />
    }

    return (
      <Card id={id} name={name} color='#fff' backgroundColor={background}>
          <Image source={{ uri: picture }} style={styles.img} />
      </Card>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 120,
        height: 120,
        position: 'absolute',
        bottom: -15,
        right: -10,
        zIndex: 1
    }
})

export const PokedexItem = React.memo(PokemonCard)