import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { PokemonList } from './components';

const queryClient = new QueryClient();

export default function PokeApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonList />
    </QueryClientProvider>
  );
}
