import { screen } from '@testing-library/react';
import React from 'react';
import { renderWithTheme } from '@/utils/testUtils';
import Home from '../page';

describe('<Home/> page components', () => {
  it('should render correctly empty state', () => {
    renderWithTheme(<Home />);

    expect(screen.getByText('👋 Type repository name to start search')).toBeInTheDocument();
  });
});
