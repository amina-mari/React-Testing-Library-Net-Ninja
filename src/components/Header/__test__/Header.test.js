import { render, screen } from '@testing-library/react';
import Header from '../Header'

it('renders render same text passed into title prop', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

it('renders render same text passed into title prop', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByRole("heading", {name: "My Header"});
    expect(headingElement).toBeInTheDocument();
});
 
it('renders render same text passed into title prop', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByTitle("Header");
    expect(headingElement).toBeInTheDocument();
});
 
it('renders render same text passed into title prop', () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
});
 

// FindBy
it('renders render same text passed into title prop', async () => {
    render(<Header title="My Header" />);
    const headingElement = await screen.findByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
});

// QueryBy

it('renders render same text passed into title prop', async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
});

it('renders render same text passed into title prop', async () => {
    render(<Header title="My Header" />);
    const headingElement = await screen.getAllByRole("heading");
    expect(headingElement.length).toBe(2);
});