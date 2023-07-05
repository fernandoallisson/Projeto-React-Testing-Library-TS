import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FavoritePokemon from '../pages/FavoritePokemon';
import App from '../App';

describe('Testando o componente FvoritePokemon.tsx', () => {
  test('É exibida na tela a mensagem No favorite pokemon found caso a pessoa não tenha Pokémon favorito.', () => {
    render(<FavoritePokemon pokemonList={ [] } />);
    const message = screen.getByText('No favorite Pokémon found');
    expect(message).toBeInTheDocument();
  });
  // test('Apenas são exibidos os Pokémon favoritados, caso seja favoritado algum.', () => {
  //   render(
  //     <MemoryRouter initialEntries={ ['/favorites'] }>
  //       <App />
  //     </MemoryRouter>,
  //   );
  //   const pokemonList = [
  //     {
  //       id: 143,
  //       name: 'Snorlax',
  //       type: 'Normal',
  //       averageWeight: {
  //         value: '460.0',
  //         measurementUnit: 'kg',
  //       },
  //       image: 'https://archives.bulbagarden.net/media/upload/4/40/Spr_5b_143.png',
  //       moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)',
  //       foundAt: [
  //         {
  //           location: 'Kanto Vermillion City',
  //           map: 'https://archives.bulbagarden.net/media/upload/5/54/Kanto_Vermilion_City_Map.png',
  //         },
  //       ],
  //       summary: 'What sounds like its cry may actually be its snores or the rumblings of its hungry belly.',
  //     },
  //   ];
  //   render(<FavoritePokemon pokemonList={ pokemonList } />);
  //   const pokemonNames = screen.getAllByText(/Snorlax/i);
  //   expect(pokemonNames.some((name) => name.textContent === 'Snorlax')).toBeTruthy();
  // });
});
