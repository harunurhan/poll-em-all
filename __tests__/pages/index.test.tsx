import { shallow } from 'enzyme';
import React from 'react';

import App from '../../pages/index';

describe('Index', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
