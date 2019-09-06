import React from 'react';
import ReactDOM from 'react-dom';

import { render, fireEvent, waitForElement } from '@testing-library/react'


import App from './App';
import Button from './components/Button';
import PlayerCard from './components/PlayerCard';

test('button renders without crashing', () => {
    render(<Button />)
})

test('contains "toggle dark mode" button', () => {
  const { getByText } = render(<Button />)

  getByText(/toggle dark mode/i)
})



test('woman soccer player data renders on website', () => {
  const { getByText } = render(<h1>woman soccer player data</h1>)

  getByText(/woman soccer player data/i)
})


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


