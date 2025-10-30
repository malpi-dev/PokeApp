import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { PokemonListItem as IPokemonListItem } from '../interfaces';

type Props = {
  pokemon: IPokemonListItem;
};

export function PokemonListItem({ pokemon }: Props) {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <View>
        <Text style={styles.text}>{pokemon.name}</Text>
        <Text style={styles.textNumber}>#{pokemon.id}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
  },
  image: { width: 60, height: 60, marginRight: 12 },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  textNumber: { color: '#555' },
});
