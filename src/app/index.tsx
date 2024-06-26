import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

import {usePokemons} from '../hooks/usePokemons';
import {PokedexItem} from '../components/PokedexItem';
import {Spinner} from '../components/Spinner';
import {colors} from '../theme/colors';

const Index = () => {
  const {pokemons, getPokemons, status} = usePokemons();

  if (status === 'loading' && pokemons.length === 0) {
    return <Spinner />;
  }

  if (status === 'error' || (status === 'success' && pokemons.length === 0)) {
    return (
      <View style={styles.withoutResults}>
        <Text style={styles.withoutResultText}>
          At this time there are no pokemons available.
        </Text>
        <Image
          style={styles.withoutResultImg}
          source={require('../assets/pokeball-white.png')}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1}}>
			<FlatList
				data={pokemons}
				keyExtractor={pokemon => pokemon.id}
				renderItem={({item}) => <PokedexItem item={item} />}
				showsVerticalScrollIndicator={true}
				onEndReached={getPokemons}
				onEndReachedThreshold={0.4}
				ListFooterComponent={<Spinner />}
				removeClippedSubviews
				ListHeaderComponent={
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Pokédex</Text>
					</View>
				}
			/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: colors.red,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#fff',
  },
  withoutResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.red,
  },
  withoutResultText: {
    fontSize: 25,
    width: '80%',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  withoutResultImg: {
    width: 150,
    height: 150,
    opacity: 0.9,
  },
});

export default Index;