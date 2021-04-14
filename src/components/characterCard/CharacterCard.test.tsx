import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterCard from './CharacterCard';

describe('CharacterCard', () => {
  test('render CharacterCard with correct properties', () => {
    const character = {
      id: 1,
      name: 'Homem aranha',
      description: '',
      thumbnail: {
        path: 'static/images/homem-aranha',
        extension: '.jpg',
      },
    };

    render(<CharacterCard character={character} />);

    const characterCard = screen.getByText(/Homem aranha/i);
    expect(characterCard).toBeInTheDocument();
  });
});
