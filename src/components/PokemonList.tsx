import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { PokemonListItem as IPokemonListItem } from '../interfaces';
import { fetchPokemons } from '../services';
import { PokemonListItem } from '.';
import { SafeAreaView } from 'react-native-safe-area-context';

export function PokemonList() {
  useEffect(() => {
    const firstFetch = async () => {
      const pokemons = await fetchPokemons(1);
      setPokemons(pokemons);
    };

    firstFetch();
  }, []);

  const [pokemons, setPokemons] = useState<IPokemonListItem[]>([]);
  const [page, setPage] = useState(1);

  const loadMore = async () => {
    const newPokemons = await fetchPokemons(page + 1);
    setPokemons([...pokemons, ...newPokemons]);
    setPage(page + 1);
  };

  return (

     <View style={styles.wrapper}>
      <FlatList
        data={pokemons}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        numColumns={3}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => <PokemonListItem pokemon={item} />}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // padding: 10,
    backgroundColor: '#fff',
  },
  row: {
    flex: 1,
    justifyContent: 'space-around', // Distributes items evenly in a row
  },
});
