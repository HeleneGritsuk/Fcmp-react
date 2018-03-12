import React from 'react';
import styles from '../../styles/postsList.css.js';
import Post from './Post.jsx';

class Posts extends React.Component {

  render() {
    const { posts } = this.props;

    return (
      <ul style = {styles.postsWrapper}>
        {
          posts.map(post =>
            <Post
              key={post.id}
              {...post}
            />
        )}
      </ul>
    );
  }

}

export default Posts;
