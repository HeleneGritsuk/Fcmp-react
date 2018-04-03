import React from 'react';
import Posts from '../src/client/components/Posts/Posts.jsx';
import renderer from 'react-test-renderer';

const mockPostsList = [
  {
    author: "THE ASSOCIATED PRESS",
    id: "5ac1134b9bc42c482c71e594",
    text: "China's defunct Tiangong 1 space station is hurtling toward Earth and expected to re-enter the atmosphere within the next day.\nMost of it should burn up on re-entry, so scientists say it poses only a …",
    title: "Defunct Chinese space lab set to re-enter Earth's atmosphere1"
  },
  {
    author: "ABC News",
    id: "5ac113689bc42c482c71e595",
    text: "The computer expert who alleges a trove of Facebook data was improperly used to help Donald Trump's White House bid says he strongly believes the",
    title: "Defunct Chinese space lab set to re-enter Earth's atmosphere1"
  }
]
describe('PostsList', () => {
  it('should render list of Posts correctly', () => {
    const tree = renderer.create(<Posts posts = {mockPostsList} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
