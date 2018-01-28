import * as React from 'react';
import { expect } from 'chai';
import * as enzyme from 'enzyme';

import Home from './index';

describe('Route Home', () => {
  it('renders', () => {
    const home = enzyme.shallow(<Home />);
    expect(home.find('.page--home'));
  });
});
