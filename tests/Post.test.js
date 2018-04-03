import React from 'react';
import Post from '../src/client/components/Posts/Post.jsx';
import renderer from 'react-test-renderer';

const mockPost = {
    author: "THE ASSOCIATED PRESS",
    id: "5ac1134b9bc42c482c71e594",
    text: "China's defunct Tiangong 1 space station is hurtling toward Earth and expected to re-enter the atmosphere within the next day.\nMost of it should burn up on re-entry, so scientists say it poses only a …",
    title: "Defunct Chinese space lab set to re-enter Earth's atmosphere1"
  };

describe('Post', () => {
  it('should render Post content correctly', () => {
    const tree = renderer.create(<Post key={mockPost.id} {...mockPost} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
