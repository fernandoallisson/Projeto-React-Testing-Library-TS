import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
// import Pokedex from '../pages/Pokedex';

describe('Testando o componente Pokedex.tsx', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
  });
  const pokemonName = 'pokemon-name';

  test('A página contém um heading h2 com o texto "Encountered Pokémon".', () => { // testado
    const heading = screen.getByRole('heading', { level: 2, name: 'Encountered Pokémon' });
    expect(heading).toBeInTheDocument();
  });

  test('É mostrado apenas um Pokémon por vez.', () => { // testado | desnecessário
    const pokemonNames = screen.getAllByTestId(pokemonName);
    expect(pokemonNames.length).toBe(1);
  });

  test('O próximo Pokémon da lista é mostrado ao clicar no botão "Próximo Pokémon".', () => { // testado
    // const listPokemons = ['Pikachu', 'Charmander', 'Caterpie', 'Ekans', 'Alakazam', 'Mew', 'Rapidash', 'Snorlax', 'Dragonair'];

    const nextButton = screen.getByText(/Próximo Pokémon/i);

    fireEvent.click(nextButton);
    const pokemon2 = screen.getByRole('img', { name: /Charmander sprite/ });
    expect(pokemon2).toBeInTheDocument();

    fireEvent.click(nextButton);
    const pokemon3 = screen.getByRole('img', { name: /Caterpie sprite/ });
    expect(pokemon3).toBeInTheDocument();

    fireEvent.click(nextButton);
    const pokemon4 = screen.getByRole('img', { name: /Ekans sprite/ });
    expect(pokemon4).toBeInTheDocument();

    fireEvent.click(nextButton);
    const pokemon5 = screen.getByRole('img', { name: /Alakazam sprite/ });
    expect(pokemon5).toBeInTheDocument();

    fireEvent.click(nextButton);
    const pokemon6 = screen.getByRole('img', { name: /Mew sprite/ });
    expect(pokemon6).toBeInTheDocument();

    fireEvent.click(nextButton);
    const pokemon7 = screen.getByRole('img', { name: /Rapidash sprite/ });
    expect(pokemon7).toBeInTheDocument();

    fireEvent.click(nextButton);
    const pokemon8 = screen.getByRole('img', { name: /Snorlax sprite/ });
    expect(pokemon8).toBeInTheDocument();

    fireEvent.click(nextButton);
    const pokemon9 = screen.getByRole('img', { name: /Dragonair sprite/ });
    expect(pokemon9).toBeInTheDocument();

    fireEvent.click(nextButton);
    const pokemon1 = screen.getByRole('img', { name: /Pikachu sprite/ });
    expect(pokemon1).toBeInTheDocument();
  });

  test('A Pokédex contém botões de filtro para cada tipo de Pokémon.', () => { // testado
    const types = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon']; // Tipos de botões;
    const typoBtn = screen.getAllByTestId('pokemon-type-button'); // Pega os botões pelo ID

    typoBtn.forEach((type, index) => {
      expect(type).toHaveTextContent(types[index]);
    });
  });

  test('Ao clicar em um botão de tipo, a Pokédex deve circular somente pelos Pokémon daquele tipo.', () => { // testado
    const fireBtn = screen.getByRole('button', { name: /Fire/i });

    fireEvent.click(fireBtn); // Clicou no Fire
    const nextButton = screen.getByText('Próximo Pokémon');

    const initialPokemonName = screen.getByRole('img', { name: /Charmander sprite/i });
    expect(initialPokemonName).toBeInTheDocument();

    fireEvent.click(nextButton);

    const secondlPokemonName = screen.getByRole('img', { name: /Rapidash sprite/i });
    expect(secondlPokemonName).toBeInTheDocument();
  });

  test('A Pokédex contém um botão para resetar o filtro com o texto "All".', () => { // testado
    const resetButton = screen.getByRole('button', { name: 'All' });
    const bugBtn = screen.getByRole('button', { name: 'Bug' });
    expect(resetButton).toBeInTheDocument();

    fireEvent.click(bugBtn);
    fireEvent.click(resetButton);

    expect(screen.getByRole('img', { name: /pikachu sprite/i })).toBeInTheDocument();
  });

  test('Ao clicar no botão "All", a Pokédex mostra todos os Pokémon.', () => {
    const fireBtn = screen.getByRole('button', { name: 'Fire' });
    fireEvent.click(fireBtn); // Clicou no Fire

    const allBtn = screen.getByRole('button', { name: 'All' });
    fireEvent.click(allBtn);

    const pokemonNames = screen.getAllByTestId(pokemonName);
    expect(pokemonNames.length).toBeGreaterThan(0);
  });

  test('Ao carregar a página, o filtro selecionado é "All".', () => {
    const allButton = screen.getByText('All');
    // const allButton = screen.getAllByTestId('');
    expect(allButton).toBeInTheDocument();
  });
});
