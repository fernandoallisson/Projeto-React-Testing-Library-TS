import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('testando o componente App.tsx', () => {
  test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação:', () => {
    render(<App />, { wrapper: MemoryRouter });
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const aboutLink = screen.getByRole('link', { name: 'About' });
    const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémon' });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoriteLink).toBeInTheDocument();
  });
  test('Teste se a aplicação é redirecionada para a página inicial, na URL /, ao clicar no link Home da barra de navegação.', () => {
    render(<App />, { wrapper: MemoryRouter });

    const homeLink = screen.getByRole('link', { name: 'Home' });
    fireEvent.click(homeLink);

    expect(screen.getByText('Encountered Pokémon')).toBeInTheDocument();
  });

  test('Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação.', () => {
    render(<App />, { wrapper: MemoryRouter });

    const aboutLink = screen.getByRole('link', { name: 'About' });
    fireEvent.click(aboutLink);

    expect(screen.getByText('About Pokédex')).toBeInTheDocument();
  });
  test('Teste se a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação.', () => {
    render(
      <MemoryRouter initialEntries={ ['/'] }>
        <App />
      </MemoryRouter>,
    );

    const favoriteLink = screen.getByRole('link', { name: /Favorite Pokémon/i });
    fireEvent.click(favoriteLink);

    const favoritesPageHeading = screen.getByRole('heading', { name: /Favorite Pokémon/i });
    expect(favoritesPageHeading).toBeInTheDocument();
  });
  test('Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.', () => {
    render(
      <MemoryRouter initialEntries={ ['/unknown'] }>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText(/page requested not found/i)).toBeInTheDocument();
  });
});
