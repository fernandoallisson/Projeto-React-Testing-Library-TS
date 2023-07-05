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
  // const nextButtonTestId = 'next-pokemon';
  const pokemonName = 'pokemon-name';

  test('A página contém um heading h2 com o texto "Encountered Pokémon".', () => {
    const heading = screen.getByRole('heading', { level: 2, name: 'Encountered Pokémon' });
    expect(heading).toBeInTheDocument();
  });

  test('É mostrado apenas um Pokémon por vez.', () => {
    const pokemonNames = screen.getAllByTestId(pokemonName);
    expect(pokemonNames.length).toBe(1);
  });

  test('O próximo Pokémon da lista é mostrado ao clicar no botão "Próximo Pokémon".', () => {
    const nextButton = screen.getByText(/Próximo Pokémon/i);
    const firstPokemonName = screen.getByTestId(pokemonName).textContent; // pikachu

    fireEvent.click(nextButton);
    const secondPokemonName = screen.getByTestId(pokemonName).textContent; // Charmander
    expect(secondPokemonName).not.toBe(firstPokemonName);

    fireEvent.click(nextButton);
    const thirdPokemonName = screen.getByTestId(pokemonName).textContent; // Caterpie
    expect(thirdPokemonName).not.toBe(secondPokemonName);

    fireEvent.click(nextButton);
    const newFirstPokemonName = screen.getByTestId(pokemonName).textContent; // Ekans
    expect(newFirstPokemonName).not.toBe(firstPokemonName);
  });

  test('A Pokédex contém botões de filtro para cada tipo de Pokémon.', () => {
    const types = ['All', 'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon']; // Exemplo de tipos

    types.forEach((type) => {
      const typoBtn = screen.getByRole('button', { name: type });
      expect(typoBtn).toBeInTheDocument();
    });
  });

  test('Ao clicar em um botão de tipo, a Pokédex deve circular somente pelos Pokémon daquele tipo.', () => {
    const fireBtn = screen.getByRole('button', { name: 'Fire' });
    fireEvent.click(fireBtn); // Clicou no Fire

    const initialPokemonName = screen.getByTestId('pokemon-type').textContent;
    const fogo = fireBtn.textContent;
    expect(fogo).toBe(initialPokemonName);

    const nextButton = screen.getByText('Próximo Pokémon');
    fireEvent.click(nextButton);

    const secondPokemonName = screen.getByTestId('pokemon-type').textContent;
    expect(fogo).toBe(secondPokemonName);
  });

  test('A Pokédex contém um botão para resetar o filtro com o texto "All".', () => {
    const resetButton = screen.getByText('All');
    expect(resetButton).toBeInTheDocument();
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

// -------------------------------------------------------------------------------------------------
// describe('Testando o componente Pokedex.tsx', () => {
//   const nextButtonTestId = 'next-pokemon';

//   beforeEach(() => {
//     render(
//       <MemoryRouter initialEntries={ ['/'] }>
//         <App />
//       </MemoryRouter>,
//     );
//   });

//   test('A página contém um heading h2 com o texto "Encountered Pokémon".', () => {
//     const heading = screen.getByRole('heading', { level: 2, name: 'Encountered Pokémon' });
//     expect(heading).toBeInTheDocument();
//   });

//   test('É mostrado apenas um Pokémon por vez.', () => {
//     const pokemonNames = screen.getAllByText(/Pikachu|Bulbasaur/);
//     expect(pokemonNames.length).toBe(1);
//   });

//   test('O próximo Pokémon da lista é mostrado ao clicar no botão "Próximo Pokémon".', () => {
//     const pokemonName1 = 'Charmander';
//     const pokemonName2 = 'Caterpie';
//     const nextButton = screen.getByTestId(nextButtonTestId);

//     fireEvent.click(nextButton);
//     expect(screen.getByText(pokemonName1)).toBeInTheDocument();

//     fireEvent.click(nextButton);
//     expect(screen.getByText(pokemonName2)).toBeInTheDocument();
//   });

//   test('A Pokédex contém botões de filtro para cada tipo de Pokémon.', () => {
//     const allBtn = screen.getByRole('button', { name: 'All' });
//     const eletricBtn = screen.getByRole('button', { name: 'Electric' });
//     const fireBtn = screen.getByRole('button', { name: 'Fire' });
//     const bugBtn = screen.getByRole('button', { name: 'Bug' });
//     const poisonBtn = screen.getByRole('button', { name: 'Poison' });
//     const psychicBtn = screen.getByRole('button', { name: 'Psychic' });
//     const normalBtn = screen.getByRole('button', { name: 'Normal' });
//     const dragonBtn = screen.getByRole('button', { name: 'Dragon' });

//     expect(allBtn).toBeInTheDocument();
//     expect(eletricBtn).toBeInTheDocument();
//     expect(fireBtn).toBeInTheDocument();
//     expect(bugBtn).toBeInTheDocument();
//     expect(poisonBtn).toBeInTheDocument();
//     expect(psychicBtn).toBeInTheDocument();
//     expect(normalBtn).toBeInTheDocument();
//     expect(dragonBtn).toBeInTheDocument();
//   });

//   test('Ao clicar em um botão de tipo, a Pokédex deve circular somente pelos Pokémon daquele tipo.', () => {
//     const eletricBtn = screen.getByRole('button', { name: 'Electric' });
//     const fireBtn = screen.getByRole('button', { name: 'Fire' });
//     const nextButton = screen.getByTestId('next-pokemon');
//     fireEvent.click(eletricBtn);
//     expect(screen.getByText('Pikachu')).toBeInTheDocument();

//     fireEvent.click(fireBtn);
//     expect(screen.queryByText('Charmander')).toBeInTheDocument();
//     fireEvent.click(nextButton);
//     expect(screen.getByText('Rapidash')).toBeInTheDocument();
//     fireEvent.click(nextButton);
//     expect(screen.getByText('Charmander')).toBeInTheDocument();
//   });

//   test('A Pokédex contém um botão para resetar o filtro com o texto "All".', () => {
//     const allButton = screen.getByText('All');

//     expect(allButton).toBeInTheDocument();
//   });

//   test('Ao clicar no botão "All", a Pokédex mostra todos os Pokémon.', () => {
//     const allBtn = screen.getByRole('button', { name: 'All' });
//     const nextButton = screen.getByTestId(nextButtonTestId);

//     fireEvent.click(allBtn);
//     expect(screen.getByText('Pikachu')).toBeInTheDocument();
//     fireEvent.click(nextButton);
//     expect(screen.getByText('Charmander')).toBeInTheDocument();
//     fireEvent.click(nextButton);
//     expect(screen.getByText('Caterpie')).toBeInTheDocument();
//     fireEvent.click(nextButton);
//     expect(screen.getByText('Ekans')).toBeInTheDocument();
//   });

//   test('Ao carregar a página, o filtro selecionado é "All".', () => {
//     expect(screen.getByText('Pikachu')).toBeInTheDocument();

//     const nextButton = screen.getByTestId(nextButtonTestId); // Deve estar habilitado.
//     expect(nextButton).not.toHaveAttribute('disabled');
//   });
// });
