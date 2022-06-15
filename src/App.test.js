import { render } from '@testing-library/react';
import App from './App';

jest.mock('./components/AuthForm', () => ({
  __esModule: true,
  default: () => <div>AuthForm</div>,
}));

test('renders learn react link', () => {
  const container = render(<App />);
  expect(container.baseElement).toMatchSnapshot();
});
