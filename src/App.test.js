import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('main rendering test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('App should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });    
});
