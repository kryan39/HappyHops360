import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';

const layout = require('./Layout');

test('it is same snapshot of Navbar', () => {
  expect(layout.Navbar).toMatchSnapshot();
});
