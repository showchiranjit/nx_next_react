import { render } from '@testing-library/react';

import CcaSharedUi from './cca-shared-ui';

describe('CcaSharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CcaSharedUi />);
    expect(baseElement).toBeTruthy();
  });
});
