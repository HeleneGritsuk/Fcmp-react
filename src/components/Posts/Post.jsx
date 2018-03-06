import React from 'react';
import styles from '../../styles/postsList.css.js';

class Post extends React.Component {

  render() {
    const {  author,  text,   title } = this.props;

    return (
      <div style = {styles.postContainer}>
        <div style = {styles.titleStyle}>{title}</div>
        <div style = {styles.authorWrapper}>by {author}</div>
        <div>Text: {text}</div>
      </div>
    );
  }
}
export default Post;
