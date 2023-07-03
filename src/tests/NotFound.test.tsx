import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Testando o componente NotFound', () => {
  test('Teste se a página contém um heading h2 com o texto Page requested not found.', () => {
    render(
      <MemoryRouter initialEntries={ ['/unknown'] }>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { level: 2, name: /page requested not found/i })).toBeInTheDocument();
  });
  test('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    render(
      <MemoryRouter initialEntries={ ['/unknown'] }>
        <App />
      </MemoryRouter>,
    );
    const image = screen.getByAltText('Pikachu crying because the page requested was not found');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
