import { fireEvent, screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('testando o componente PokemonDetails.tsx', () => {
  const rotaPokemonCharmander = '/pokemon/4';

  test('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela:', () => {
    renderWithRouter(<App />, { route: rotaPokemonCharmander });
    const charmanderTitle = screen.getByRole('heading', { name: /charmander details/i });
    expect(charmanderTitle).toBeInTheDocument();

    const charmanderDescription = screen.getByText('The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.');
    expect(charmanderDescription).toBeInTheDocument();
  });
  test('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon:', () => {
    renderWithRouter(<App />, { route: rotaPokemonCharmander });

    const charmanderLocation = screen.getByRole('heading', { name: /Game Locations of Charmander/i });
    expect(charmanderLocation).toBeInTheDocument();

    const location1 = screen.getByText(/Alola Route 3/i);
    expect(location1).toBeInTheDocument();

    const imageOfLocation = screen.getAllByAltText(/Charmander location/i);
    expect(imageOfLocation[1]).toHaveAttribute('src', 'https://archives.bulbagarden.net/media/upload/4/4a/Kanto_Route_3_Map.png');
  });
  test.only('Teste se o usuário pode favoritar um Pokémon por meio da página de detalhes:', () => {
    renderWithRouter(<App />, { route: rotaPokemonCharmander });

    const check = screen.getByRole('checkbox', { name: 'Pokémon favoritado?' });
    expect(check).toBeInTheDocument();

    fireEvent.click(check);

    const iconFavorite = screen.getByRole('img', { name: /Charmander is marked as favorite/i });
    expect(iconFavorite).toBeInTheDocument();

    fireEvent.click(check);

    expect(iconFavorite).not.toBeInTheDocument();
  });
});
