import { PokemonResult } from './PokemonResult.interface';

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
}
