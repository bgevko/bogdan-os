import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { it, expect, describe, beforeEach } from 'vitest';

import App from '@/app';

function parseTranslate(transform: string) {
  const regex = /translate\((\d+)px, (\d+)px\)/;
  const match = transform.match(regex);
  if (match) {
    const x = Number.parseInt(match[1], 10);
    const y = Number.parseInt(match[2], 10);
    return { x, y };
  }
  return { x: 0, y: 0 };
}

beforeEach(async () => {
  render(<App />);
  // TODO: Change this to an appropriate desktop icon later
  await userEvent.click(screen.getByText('Explore'));
});

describe('Window', () => {
  it('should be open when clicking on the desktop icon', () => {
    const windowHeader = screen.getByTestId('window-header');
    expect(windowHeader).toBeInTheDocument();
  });

  it('should have a taskbar entry when opened.', () => {
    const taskbarEntry = screen.getByTestId('taskbar-entry');
    expect(taskbarEntry).toBeInTheDocument();
  });

  it('should not have a window or taskbar entry after being closed.', async () => {
    const closeButton = screen.getByTestId('window-close');
    await userEvent.click(closeButton);
    const windowHeader = screen.queryByTestId('window-header');
    const taskbarEntry = screen.queryByTestId('taskbar-entry');
    expect(windowHeader).not.toBeInTheDocument();
    expect(taskbarEntry).not.toBeInTheDocument();
  });

  it('should be draggable.', () => {
    const win = screen.getByTestId('window');
    // const windowHeader = screen.getByTestId('window-header');
    //
    // const initialPosition = parseTranslate(win.style.transform);

    // Drag window -10px left by using mouseDown, mouseMove, and mouseUp events on the window header
    // The window should be dragged -10px left

    const positionAfterDrag = parseTranslate(win.style.transform);
    console.log(positionAfterDrag);
    // expect(positionAfterDrag.x).toBe(initialPosition.x - 10);
  });
});
