import renderer from 'react-test-renderer'
{/*import { render, screen } from '@testing-library/react';*/}
import App from './App';

//This is a snapshot test of the App component
test('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot()
})