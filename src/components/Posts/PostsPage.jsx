import React from 'react';
import PostsList from './PostsList.jsx';
import FilterBlock from './FilterBlock.jsx';
import AddPost from './AddPost.jsx';

class PostsPage extends React.Component {
  render() {
    return (
      <div>
        <FilterBlock />
        <AddPost />
        <PostsList />
      </div>
    );
  }
}

export default PostsPage;
