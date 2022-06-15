import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AuthForm from '../AuthForm';

describe('<AuthForm/>', () => {
  it('should handle input change', async () => {
    const user = userEvent.setup();

    const handleChange = jest.fn();

    render(<AuthForm handleChange={handleChange} />);

    await user.type(screen.getByPlaceholderText('Email address'), 'test@test.com');
    await user.type(screen.getByPlaceholderText('Password'), 'password');

    expect(handleChange).toHaveBeenCalledTimes(21);

    expect(screen.getByPlaceholderText('Email address')).toHaveValue('test@test.com');
    expect(screen.getByPlaceholderText('Password')).toHaveValue('password');
  });

  it('should handle submit', async () => {
    const user = userEvent.setup();
    const handleSubmit = jest.fn(e => e.preventDefault());

    render(<AuthForm handleSubmit={handleSubmit} />);

    await user.click(screen.getByRole('button', { name: 'Login' }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
