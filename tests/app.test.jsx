import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

import { App } from '@/App';

describe('App', () => {
  it('renders the App component', () => {
    const { container } = render(<App />);

    expect(container.firstChild).toBeTruthy();
  });
});
