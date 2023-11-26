import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('The main app', () => {
  
  // orders link
  it('should render the Orders link', () => {
    render(<App />);
    const ordersElements = screen.getAllByText('Orders');
    
    // order elements is not empty
    expect(ordersElements.length).toBeGreaterThan(0);
  });

  // payments link
  it('should render the Payments link', () => {
    render(<App />);
    const paymentsElements = screen.getAllByText('Payment');
    
    // order elements is not empty
    expect(paymentsElements.length).toBeGreaterThan(0);
  });
  
  // home link
  it('should render the Home link', () => {
    render(<App />);
    const homeElements = screen.getByRole('link', { name: "Home" });

    // home is not empty
    expect(homeElements).toBeInTheDocument();
  });

  // rendering header
  it('should render the Home header', () => {
    render(<App />);
    // need h2 tag
    const homeElements = screen.getByRole('heading', { level: 2 });

    // home is not empty
    expect(homeElements).toBeInTheDocument();
  });

});


