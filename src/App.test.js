/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */

import { render, screen } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('div').hasClass('app-wrapper'));
});
