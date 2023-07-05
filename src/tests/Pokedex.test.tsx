import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Testando o componente Pokedex.tsx', () => {
  const nextButtonTestId = 'next-pokemon';

  test('A página contém um heading h2 com o texto "Encountered Pokémon".', () => {
    render(
      <MemoryRouter initialEntries={ ['/'] }>
        <App />
      </MemoryRouter>,
    );
    const heading = screen.getByRole('heading', { level: 2, name: 'Encountered Pokémon' });
    expect(heading).toBeInTheDocument();
  });

  test('É mostrado apenas um Pokémon por vez.', () => {
    render(
      <MemoryRouter initialEntries={ ['/'] }>
        <App />
      </MemoryRouter>,
    );
    const pokemonNames = screen.getAllByText(/Pikachu|Bulbasaur/);
    expect(pokemonNames.length).toBe(1);
  });

  test('O próximo Pokémon da lista é mostrado ao clicar no botão "Próximo Pokémon".', () => {
    render(
      <MemoryRouter initialEntries={ ['/'] }>
        <App />
      </MemoryRouter>,
    );
    const pokemonName1 = 'Charmander';
    const pokemonName2 = 'Caterpie';
    const nextButton = screen.getByTestId(nextButtonTestId);

    fireEvent.click(nextButton);
    expect(screen.getByText(pokemonName1)).toBeInTheDocument();

    fireEvent.click(nextButton);
    expect(screen.getByText(pokemonName2)).toBeInTheDocument();
  });

  test('A Pokédex contém botões de filtro para cada tipo de Pokémon.', () => {
    render(
      <MemoryRouter initialEntries={ ['/'] }>
        <App />
      </MemoryRouter>,
    );
    const allBtn = screen.getByRole('button', { name: 'All' });
    const eletricBtn = screen.getByRole('button', { name: 'Electric' });
    const fireBtn = screen.getByRole('button', { name: 'Fire' });
    const bugBtn = screen.getByRole('button', { name: 'Bug' });
    const poisonBtn = screen.getByRole('button', { name: 'Poison' });
    const psychicBtn = screen.getByRole('button', { name: 'Psychic' });
    const normalBtn = screen.getByRole('button', { name: 'Normal' });
    const dragonBtn = screen.getByRole('button', { name: 'Dragon' });

    expect(allBtn).toBeInTheDocument();
    expect(eletricBtn).toBeInTheDocument();
    expect(fireBtn).toBeInTheDocument();
    expect(bugBtn).toBeInTheDocument();
    expect(poisonBtn).toBeInTheDocument();
    expect(psychicBtn).toBeInTheDocument();
    expect(normalBtn).toBeInTheDocument();
    expect(dragonBtn).toBeInTheDocument();
  });

  test('Ao clicar em um botão de tipo, a Pokédex deve circular somente pelos Pokémon daquele tipo.', () => {
    render(
      <MemoryRouter initialEntries={ ['/'] }>
        <App />
      </MemoryRouter>,
    );
    const eletricBtn = screen.getByRole('button', { name: 'Electric' });
    const fireBtn = screen.getByRole('button', { name: 'Fire' });
    const nextButton = screen.getByTestId('next-pokemon');
    fireEvent.click(eletricBtn);
    expect(screen.getByText('Pikachu')).toBeInTheDocument();

    fireEvent.click(fireBtn);
    expect(screen.queryByText('Charmander')).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(screen.getByText('Rapidash')).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(screen.getByText('Charmander')).toBeInTheDocument();
  });

  test('A Pokédex contém um botão para resetar o filtro com o texto "All".', () => {
    render(
      <MemoryRouter initialEntries={ ['/'] }>
        <App />
      </MemoryRouter>,
    );
    const allButton = screen.getByText('All');

    expect(allButton).toBeInTheDocument();
  });

  test('Ao clicar no botão "All", a Pokédex mostra todos os Pokémon.', () => {
    render(
      <MemoryRouter initialEntries={ ['/'] }>
        <App />
      </MemoryRouter>,
    );
    const allBtn = screen.getByRole('button', { name: 'All' });
    const nextButton = screen.getByTestId(nextButtonTestId);

    fireEvent.click(allBtn);
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(screen.getByText('Charmander')).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(screen.getByText('Caterpie')).toBeInTheDocument();
    fireEvent.click(nextButton);
    expect(screen.getByText('Ekans')).toBeInTheDocument();
  });

  test('Ao carregar a página, o filtro selecionado é "All".', () => {
    render(
      <MemoryRouter initialEntries={ ['/'] }>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByText('Pikachu')).toBeInTheDocument();

    const nextButton = screen.getByTestId(nextButtonTestId); // Deve estar habilitado.
    expect(nextButton).not.toHaveAttribute('disabled');
  });
});
