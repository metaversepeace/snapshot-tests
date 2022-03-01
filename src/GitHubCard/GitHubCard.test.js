import renderer from 'react-test-renderer'
import GitHubCard from './GitHubCard';

//This is a snapshot test of the GitHubCard component
test('renders a snapshot', () => {
  const tree = renderer.create(<GitHubCard/>).toJSON()
  expect(tree).toMatchSnapshot()
})