import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PokemonList } from './components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PokemonDetail } from './pages';

const Stack = createNativeStackNavigator();

export default function PokeApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PokemonList" component={PokemonList} />
        <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
