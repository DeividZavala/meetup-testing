import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('<App/>', () => {
  test('renders learn react link', () => {
    const container = render(<App />);
    expect(container.baseElement).toMatchSnapshot();
  });

  it('should handle user input', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.type(screen.getByPlaceholderText('Email address'), 'test@test.com');
    await user.type(screen.getByPlaceholderText('Password'), 'password');

    expect(screen.getByPlaceholderText('Email address')).toHaveValue('test@test.com');
    expect(screen.getByPlaceholderText('Password')).toHaveValue('password');
  });

  it('should submit form', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Login' }));

    expect(screen.getByText(/Sesión inciada correctamente/)).toBeInTheDocument();
  });
});
