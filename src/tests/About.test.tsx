import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('Testando o component About', () => {
  test('Teste se a página contém as informações sobre a Pokédex.', () => {
    render(<About />);
    expect(screen.getByText(/This application simulates a Pokédex/i)).toBeInTheDocument();
    expect(screen.getByText(/One can filter Pokémon by type/i)).toBeInTheDocument();
  });
  test('Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
    render(<About />);
    expect(screen.getByRole('heading', { level: 2, name: /About Pokédex/i })).toBeInTheDocument();
  });
  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
      render(<About />);
      const paragraphs = screen.getAllByText(/This application simulates a Pokédex/i);
      expect(paragraphs).toHaveLength(2);
      expect(paragraphs[0]).toBeInTheDocument();
      expect(paragraphs[1]).toBeInTheDocument();
    });
  });
  test('Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png.', () => {
    render(<About />);
    const image = screen.getByAltText('Pokédex');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
