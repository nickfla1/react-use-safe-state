import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { TestComponent, TIME_TO_UPDATE } from './TestComponent';

/**
 * Reproducing the 'Can't perform a React state update on an unmounted component'
 * error requires a time based approach.
 */
const WAIT_BEFORE_CLEAR = TIME_TO_UPDATE + 100;

describe('react-use-safe-state', () => {
  it('should update internal state without throwing an error', () => {
    const root = document.createElement('div');

    return act(() => {
      ReactDOM.render(<TestComponent />, root);

      // Unmounts the root component causing our TestComponent to unmount as well.
      // Note: The timeout function inside TestComponent is still active.
      ReactDOM.unmountComponentAtNode(root);

      // Resolve and end the test after 'WAIT_BEFORE_CLEAR_MS' milliseconds
      // allowing TestComponent to throw in case the library wasn't working
      return new Promise<void>(resolve => {
        setTimeout(() => {
          resolve();
        }, WAIT_BEFORE_CLEAR);
      });
    });
  });
});
