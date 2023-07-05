import { FavoritePokemon } from '../pages';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';

describe('Testando o componente FavoritePokemon.tsx', () => {
  test('É exibida na tela a mensagem No favorite pokemon found caso a pessoa não tenha Pokémon favorito.', () => {
    const screen = renderWithRouter(<FavoritePokemon pokemonList={ [] } />);
    const noPokemon = screen.getByText(/No favorite pokémon found/i);
    expect(noPokemon).toBeInTheDocument();
  });
  test('Apenas são exibidos os Pokémon favoritados.', () => {
    const firstPokemon = pokemonList[0];
    const screen = renderWithRouter(<FavoritePokemon pokemonList={ [firstPokemon] } />);
    const pokemon1 = screen.getByText(firstPokemon.name);
    expect(pokemon1).toBeInTheDocument();
  });
});
