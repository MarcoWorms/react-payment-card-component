import React from 'react';
import ReactDOM from 'react-dom';
import CreditCard from './CreditCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreditCard 
    brand="mastercard"/>,
    div);
});
