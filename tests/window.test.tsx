/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/rules-of-hooks */
import { renderHook, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { it, expect, describe, beforeEach } from 'vitest';

import App from '@/app';
import useProcessesStore from '@/stores/use-processes-store';
import { TASKBAR_HEIGHT } from '@/themes';

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

const useTestValues = () => {
  const { result } = renderHook(
    () => useProcessesStore((state) => state.getWindowMinSize('HelloWorld')), // TODO: Change to test-only window eventually
  );
  const minWidth = result.current.width;
  const minHeight = result.current.height;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const myWindow = screen.getByTestId('window');
  const windowHeader = screen.getByTestId('window-header');
  const leftBar = screen.getByTestId('resize-left');
  const rightBar = screen.getByTestId('resize-right');
  const topBar = screen.getByTestId('resize-top');
  const bottomBar = screen.getByTestId('resize-bottom');
  const topLeftCorner = screen.getByTestId('resize-top-left');
  const topRightCorner = screen.getByTestId('resize-top-right');
  const bottomLeftCorner = screen.getByTestId('resize-bottom-left');
  const bottomRightCorner = screen.getByTestId('resize-bottom-right');
  const taskbarEntry = screen.getByTestId('taskbar-entry');

  return {
    minWidth,
    minHeight,
    viewportWidth,
    viewportHeight,
    myWindow,
    windowHeader,
    leftBar,
    rightBar,
    topBar,
    bottomBar,
    topLeftCorner,
    topRightCorner,
    bottomLeftCorner,
    bottomRightCorner,
    taskbarEntry,
  };
};

beforeEach(async () => {
  render(<App />);
  // TODO: Change this to an appropriate desktop icon later
  await userEvent.click(screen.getByText('Explore'));
});

describe('Window', () => {
  it('should be open when clicking on the desktop icon', () => {
    const { windowHeader } = useTestValues();
    expect(windowHeader).toBeInTheDocument();
  });

  it('should have a taskbar entry when opened.', () => {
    const { taskbarEntry } = useTestValues();
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

  it('should be draggable', () => {
    const { myWindow, windowHeader } = useTestValues();
    const initialPosition = parseTranslate(myWindow.style.transform);

    // The window should be dragged -10px left
    fireEvent.mouseDown(windowHeader);
    fireEvent.mouseMove(windowHeader, { clientX: -10, clientY: 0 });
    fireEvent.mouseUp(windowHeader);
    let positionAfterDrag = parseTranslate(myWindow.style.transform);
    expect(positionAfterDrag.x).toBe(initialPosition.x - 10);

    // The window should be dragged -10px up
    fireEvent.mouseDown(windowHeader);
    fireEvent.mouseMove(windowHeader, { clientX: 0, clientY: -10 });
    fireEvent.mouseUp(windowHeader);
    positionAfterDrag = parseTranslate(myWindow.style.transform);
    expect(positionAfterDrag.y).toBe(initialPosition.y - 10);

    // The window should be dragged 10px right
    fireEvent.mouseDown(windowHeader);
    fireEvent.mouseMove(windowHeader, { clientX: 10, clientY: 0 });
    fireEvent.mouseUp(windowHeader);
    positionAfterDrag = parseTranslate(myWindow.style.transform);
    expect(positionAfterDrag.x).toBe(initialPosition.x);

    // The window should be dragged 10px down
    fireEvent.mouseDown(windowHeader);
    fireEvent.mouseMove(windowHeader, { clientX: 0, clientY: 10 });
    fireEvent.mouseUp(windowHeader);
    positionAfterDrag = parseTranslate(myWindow.style.transform);
    expect(positionAfterDrag.y).toBe(initialPosition.y);
  });

  it('should not be draggable past the viewport boundaries.', () => {
    const { myWindow, windowHeader, viewportWidth, viewportHeight } = useTestValues();

    // Try to drag the window beyond the left boundary
    fireEvent.mouseDown(windowHeader);
    fireEvent.mouseMove(windowHeader, { clientX: -1000, clientY: 0 });
    fireEvent.mouseUp(windowHeader);
    let positionAfterDrag = parseTranslate(myWindow.style.transform);
    expect(positionAfterDrag.x).toBe(0);

    // Try to drag the upper boundary
    fireEvent.mouseDown(windowHeader);
    fireEvent.mouseMove(windowHeader, { clientX: 0, clientY: -1000 });
    fireEvent.mouseUp(windowHeader);
    positionAfterDrag = parseTranslate(myWindow.style.transform);
    expect(positionAfterDrag.y).toBe(0);

    const windowWidth = Number.parseFloat(getComputedStyle(myWindow).width);
    const windowHeight = Number.parseFloat(getComputedStyle(myWindow).height);

    // Try to drag the window beyond the right boundary
    fireEvent.mouseDown(windowHeader);
    fireEvent.mouseMove(windowHeader, { clientX: viewportWidth + 5000, clientY: 0 });
    fireEvent.mouseUp(windowHeader);
    positionAfterDrag = parseTranslate(myWindow.style.transform);
    expect(positionAfterDrag.x).toBe(viewportWidth - windowWidth);

    // Try to drag the lower boundary
    fireEvent.mouseDown(windowHeader);
    fireEvent.mouseMove(windowHeader, { clientX: 0, clientY: viewportHeight + 5000 });
    fireEvent.mouseUp(windowHeader);
    positionAfterDrag = parseTranslate(myWindow.style.transform);
    expect(positionAfterDrag.y).toBe(viewportHeight - windowHeight);
  });

  it('should be draggable with random positions', () => {
    const { myWindow, windowHeader, viewportWidth, viewportHeight } = useTestValues();
    const windowWidth = Number.parseFloat(getComputedStyle(myWindow).width);
    const windowHeight = Number.parseFloat(getComputedStyle(myWindow).height);

    for (let index = 0; index < 100; index += 1) {
      const initialPosition = parseTranslate(myWindow.style.transform);
      const randomX = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
      const randomY = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);

      fireEvent.mouseDown(windowHeader);
      fireEvent.mouseMove(windowHeader, { clientX: randomX, clientY: randomY });
      fireEvent.mouseUp(windowHeader);

      const positionAfterDrag = parseTranslate(myWindow.style.transform);
      expect(positionAfterDrag.x).toBe(
        Math.min(Math.max(initialPosition.x + randomX, 0), viewportWidth - windowWidth),
      );
      expect(positionAfterDrag.y).toBe(
        Math.min(Math.max(initialPosition.y + randomY, 0), viewportHeight - windowHeight),
      );
    }
  });

  it('should be resizable to the left', () => {
    // Resize left in random directions
    const { minWidth, myWindow, leftBar } = useTestValues();

    // Try to resize to the left using random values
    for (let index = 0; index < 10; index += 1) {
      const initialWidth = Number.parseFloat(getComputedStyle(myWindow).width);
      const initialHeight = Number.parseFloat(getComputedStyle(myWindow).height);
      const randomX = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
      const randomY = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
      fireEvent.mouseDown(leftBar);
      fireEvent.mouseMove(leftBar, { clientX: randomX, clientY: randomY });
      fireEvent.mouseUp(leftBar);
      const widthAfterResize = Number.parseFloat(getComputedStyle(myWindow).width);
      const positionAfterResize = parseTranslate(myWindow.style.transform);
      const maxWidth = positionAfterResize.x + widthAfterResize;
      expect(widthAfterResize).toBe(Math.min(Math.max(initialWidth - randomX, minWidth), maxWidth));
      expect(initialHeight).toBe(initialHeight);
    }
  });

  it('should be resizable to the top left', () => {
    const { minWidth, minHeight, myWindow, topLeftCorner } = useTestValues();
    // Resize top left in random directions
    for (let index = 0; index < 10; index += 1) {
      const initialWidth = Number.parseFloat(getComputedStyle(myWindow).width);
      const initialHeight = Number.parseFloat(getComputedStyle(myWindow).height);
      const randomX = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
      const randomY = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
      fireEvent.mouseDown(topLeftCorner);
      fireEvent.mouseMove(topLeftCorner, { clientX: randomX, clientY: randomY });
      fireEvent.mouseUp(topLeftCorner);
      const widthAfterResize = Number.parseFloat(getComputedStyle(myWindow).width);
      const heightAfterResize = Number.parseFloat(getComputedStyle(myWindow).height);
      const positionAfterResize = parseTranslate(myWindow.style.transform);
      const maxWidth = positionAfterResize.x + widthAfterResize;
      const maxHeight = positionAfterResize.y + heightAfterResize;
      expect(widthAfterResize).toBe(Math.min(Math.max(initialWidth - randomX, minWidth), maxWidth));
      expect(heightAfterResize).toBe(
        Math.min(Math.max(initialHeight - randomY, minHeight), maxHeight),
      );
    }
  });

  it('should be resizable upward', () => {
    const { minHeight, myWindow, topBar } = useTestValues();
    // Resize up in random directions
    for (let index = 0; index < 10; index += 1) {
      const initialWidth = Number.parseFloat(getComputedStyle(myWindow).width);
      const initialHeight = Number.parseFloat(getComputedStyle(myWindow).height);
      const randomX = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
      const randomY = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
      fireEvent.mouseDown(topBar);
      fireEvent.mouseMove(topBar, { clientX: randomX, clientY: randomY });
      fireEvent.mouseUp(topBar);
      const heightAfterResize = Number.parseFloat(getComputedStyle(myWindow).height);
      const positionAfterResize = parseTranslate(myWindow.style.transform);
      const maxHeight = positionAfterResize.y + heightAfterResize;
      expect(heightAfterResize).toBe(
        Math.min(Math.max(initialHeight - randomY, minHeight), maxHeight),
      );
      expect(initialWidth).toBe(initialWidth);
    }
  });

  it('should be resizable to the top right', () => {
    const { minWidth, minHeight, myWindow, topRightCorner, viewportWidth } = useTestValues();
    for (let index = 0; index < 10; index += 1) {
      const initialWidth = Number.parseFloat(getComputedStyle(myWindow).width);
      const initialHeight = Number.parseFloat(getComputedStyle(myWindow).height);
      const initialPosition = parseTranslate(myWindow.style.transform);
      const randomX = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
      const randomY = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
      const deltaX = initialPosition.x + initialWidth + randomX;
      fireEvent.mouseDown(topRightCorner);
      fireEvent.mouseMove(topRightCorner, { clientX: deltaX, clientY: randomY });
      fireEvent.mouseUp(topRightCorner);
      const widthAfterResize = Number.parseFloat(getComputedStyle(myWindow).width);
      const heightAfterResize = Number.parseFloat(getComputedStyle(myWindow).height);
      const positionAfterResize = parseTranslate(myWindow.style.transform);
      const maxWidth = viewportWidth - positionAfterResize.x;
      const maxHeight = positionAfterResize.y + heightAfterResize;
      expect(widthAfterResize).toBe(Math.min(Math.max(initialWidth + randomX, minWidth), maxWidth));
      expect(heightAfterResize).toBe(
        Math.min(Math.max(initialHeight - randomY, minHeight), maxHeight),
      );
    }
  });

  it('should be resizable to the right', () => {
    const { minWidth, viewportWidth, myWindow, rightBar } = useTestValues();

    // Resize right in random directions
    for (let index = 0; index < 10; index += 1) {
      const initialWidth = Number.parseFloat(getComputedStyle(myWindow).width);
      const initialHeight = Number.parseFloat(getComputedStyle(myWindow).height);
      const initialPosition = parseTranslate(myWindow.style.transform);
      const randomX = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
      const randomY = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
      const deltaX = initialPosition.x + initialWidth + randomX;
      fireEvent.mouseDown(rightBar);
      fireEvent.mouseMove(rightBar, { clientX: deltaX, clientY: randomY });
      fireEvent.mouseUp(rightBar);
      const widthAfterResize = Number.parseFloat(getComputedStyle(myWindow).width);
      const positionAfterResize = parseTranslate(myWindow.style.transform);
      const maxWidth = viewportWidth - positionAfterResize.x;
      expect(widthAfterResize).toBe(Math.min(Math.max(initialWidth + randomX, minWidth), maxWidth));
      expect(initialHeight).toBe(initialHeight);
    }
  });

  it('should be resizable to the bottom right', () => {
    const { minWidth, minHeight, myWindow, bottomRightCorner, viewportWidth, viewportHeight } =
      useTestValues();
    // Resize bottom right in random directions
    for (let index = 0; index < 10; index += 1) {
      const initialWidth = Number.parseFloat(getComputedStyle(myWindow).width);
      const initialHeight = Number.parseFloat(getComputedStyle(myWindow).height);
      const initialPosition = parseTranslate(myWindow.style.transform);
      const randomX = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
      const randomY = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
      const deltaX = initialPosition.x + initialWidth + randomX;
      const deltaY = initialPosition.y + initialHeight + randomY;
      fireEvent.mouseDown(bottomRightCorner);
      fireEvent.mouseMove(bottomRightCorner, { clientX: deltaX, clientY: deltaY });
      fireEvent.mouseUp(bottomRightCorner);
      const widthAfterResize = Number.parseFloat(getComputedStyle(myWindow).width);
      const heightAfterResize = Number.parseFloat(getComputedStyle(myWindow).height);
      const positionAfterResize = parseTranslate(myWindow.style.transform);
      const maxWidth = viewportWidth - positionAfterResize.x;
      const maxHeight = viewportHeight - positionAfterResize.y;
      expect(widthAfterResize).toBe(Math.min(Math.max(initialWidth + randomX, minWidth), maxWidth));
      expect(heightAfterResize).toBe(
        Math.min(Math.max(initialHeight + randomY, minHeight), maxHeight),
      );
    }
  });

  it('should be resizable downward', () => {
    const { minHeight, myWindow, bottomBar } = useTestValues();
    // Resize down in random directions
    for (let index = 0; index < 10; index += 1) {
      const initialWidth = Number.parseFloat(getComputedStyle(myWindow).width);
      const initialHeight = Number.parseFloat(getComputedStyle(myWindow).height);
      const initialPosition = parseTranslate(myWindow.style.transform);
      const randomX = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
      const randomY = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
      const deltaY = initialPosition.y + initialHeight + randomY;
      fireEvent.mouseDown(bottomBar);
      fireEvent.mouseMove(bottomBar, { clientX: randomX, clientY: deltaY });
      fireEvent.mouseUp(bottomBar);
      const heightAfterResize = Number.parseFloat(getComputedStyle(myWindow).height);
      const positionAfterResize = parseTranslate(myWindow.style.transform);
      const maxHeight = window.innerHeight - positionAfterResize.y;
      expect(heightAfterResize).toBe(
        Math.min(Math.max(initialHeight + randomY, minHeight), maxHeight),
      );
      expect(initialWidth).toBe(initialWidth);
    }
  });

  it('should be resizable to the bottom left', () => {
    const { minWidth, minHeight, myWindow, bottomLeftCorner, viewportHeight } = useTestValues();
    // Resize bottom left in random directions
    for (let index = 0; index < 10; index += 1) {
      const initialWidth = Number.parseFloat(getComputedStyle(myWindow).width);
      const initialHeight = Number.parseFloat(getComputedStyle(myWindow).height);
      const initialPosition = parseTranslate(myWindow.style.transform);
      const randomX = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
      const randomY = Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1);
      const deltaY = initialPosition.y + initialHeight + randomY;
      fireEvent.mouseDown(bottomLeftCorner);
      fireEvent.mouseMove(bottomLeftCorner, { clientX: randomX, clientY: deltaY });
      fireEvent.mouseUp(bottomLeftCorner);
      const widthAfterResize = Number.parseFloat(getComputedStyle(myWindow).width);
      const heightAfterResize = Number.parseFloat(getComputedStyle(myWindow).height);
      const positionAfterResize = parseTranslate(myWindow.style.transform);
      const maxWidth = positionAfterResize.x + widthAfterResize;
      const maxHeight = viewportHeight - positionAfterResize.y;
      expect(widthAfterResize).toBe(Math.min(Math.max(initialWidth - randomX, minWidth), maxWidth));
      expect(heightAfterResize).toBe(
        Math.min(Math.max(initialHeight + randomY, minHeight), maxHeight),
      );
    }
  });

  it('maximize size when double clicked to viewport size, and then back to previous size when double clicked again.', () => {
    const { myWindow, viewportWidth, viewportHeight, windowHeader } = useTestValues();
    const initialWidth = Number.parseFloat(getComputedStyle(myWindow).width);
    const initialHeight = Number.parseFloat(getComputedStyle(myWindow).height);

    // double click the header to maximize
    fireEvent.doubleClick(windowHeader);
    const maximizedWidth = Number.parseFloat(getComputedStyle(myWindow).width);
    const maximizedHeight = Number.parseFloat(getComputedStyle(myWindow).height);
    expect(maximizedWidth).toBe(viewportWidth);
    expect(maximizedHeight).toBe(viewportHeight - TASKBAR_HEIGHT);

    // double click the header to minimize
    fireEvent.doubleClick(windowHeader);
    const minimizedWidth = Number.parseFloat(getComputedStyle(myWindow).width);
    const minimizedHeight = Number.parseFloat(getComputedStyle(myWindow).height);
    expect(minimizedWidth).toBe(initialWidth);
    expect(minimizedHeight).toBe(initialHeight);

    // click on maximize button to maximize
    const maximizeButton = screen.getByTestId('window-maximize');
    fireEvent.click(maximizeButton);
    const maximizedWidth2 = Number.parseFloat(getComputedStyle(myWindow).width);
    const maximizedHeight2 = Number.parseFloat(getComputedStyle(myWindow).height);
    expect(maximizedWidth2).toBe(viewportWidth);
    expect(maximizedHeight2).toBe(viewportHeight - TASKBAR_HEIGHT);

    // click on maximize button to minimize
    fireEvent.click(maximizeButton);
    const minimizedWidth2 = Number.parseFloat(getComputedStyle(myWindow).width);
    const minimizedHeight2 = Number.parseFloat(getComputedStyle(myWindow).height);
    expect(minimizedWidth2).toBe(initialWidth);
    expect(minimizedHeight2).toBe(initialHeight);
  });

  it('Should remember previous maximized sizes', () => {
    const { myWindow, windowHeader, bottomLeftCorner } = useTestValues();
    fireEvent.doubleClick(windowHeader);

    // resize from bottom left corner
    fireEvent.mouseDown(bottomLeftCorner);
    fireEvent.mouseMove(bottomLeftCorner, { clientX: -100, clientY: 100 });
    fireEvent.mouseUp(bottomLeftCorner);
    const maximizedWidth = Number.parseFloat(getComputedStyle(myWindow).width);
    const maximizedHeight = Number.parseFloat(getComputedStyle(myWindow).height);

    fireEvent.doubleClick(windowHeader);

    // resize from bottom left corner
    fireEvent.mouseDown(bottomLeftCorner);
    fireEvent.mouseMove(bottomLeftCorner, { clientX: 100, clientY: -100 });
    const minimizedWidth = Number.parseFloat(getComputedStyle(myWindow).width);
    const minimizedHeight = Number.parseFloat(getComputedStyle(myWindow).height);

    fireEvent.doubleClick(windowHeader);
    const maximizedWidth2 = Number.parseFloat(getComputedStyle(myWindow).width);
    const maximizedHeight2 = Number.parseFloat(getComputedStyle(myWindow).height);
    expect(maximizedWidth2).toBe(maximizedWidth);
    expect(maximizedHeight2).toBe(maximizedHeight);

    fireEvent.doubleClick(windowHeader);
    const minimizedWidth2 = Number.parseFloat(getComputedStyle(myWindow).width);
    const minimizedHeight2 = Number.parseFloat(getComputedStyle(myWindow).height);
    expect(minimizedWidth2).toBe(minimizedWidth);
    expect(minimizedHeight2).toBe(minimizedHeight);
  });
});
