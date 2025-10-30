import { api } from '../api';
import { PokemonListItem, PokemonListResponse } from '../interfaces';

export const fetchPokemons = async (
  page: number = 1,
): Promise<PokemonListItem[]> => {
  const limit = 40;
  const offset = (page - 1) * limit;
  const { data } = await api.get<PokemonListResponse>(
    `/pokemon?offset=${offset}&limit=${limit}`,
  );

  return data.results.map(pokemon => {
    const id = Number(pokemon.url.split('/')[6]);
    return {
      id,
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  });
};
