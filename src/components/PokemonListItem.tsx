import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { PokemonListItem as IPokemonListItem } from '../interfaces';

type Props = {
  pokemon: IPokemonListItem;
};

export function PokemonListItem({ pokemon }: Props) {
  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <Text style={styles.text}>{pokemon.name}</Text>
      <View style={styles.bar} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  bar: {
    backgroundColor: '#00AB66',
    height: 3,
    width: '80%',
    borderRadius: 100,
    marginTop: 5,
  },
  image: { width: 100, height: 100 },
  text: {
    fontSize: 16,
    // fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  textNumber: { color: '#555' },
});
