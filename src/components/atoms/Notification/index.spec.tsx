import * as React from 'react';
import * as enzyme from 'enzyme';
import { expect } from 'chai';

import Notification from './index';

describe('Renders notification', () => {
  it('renders default', () => {
    const defautlN = enzyme.shallow(<Notification message="test" />);
    expect(defautlN.find('.m-ntf'));
  });
});
