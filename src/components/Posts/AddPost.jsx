import React from 'react';
import { connect } from 'react-redux';

import { addPost } from '../../redux/actions';

import AddPostForm from './AddPostForm.jsx';

class AddPost extends React.Component {
  render() {
    const { onClick } = this.props;

    return (
      <AddPostForm onClick = {onClick} />
    );
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    onClick: (author, textInput, postTitle) => {
      dispatch(addPost(author, textInput, postTitle));
    }
  };
};

export default connect(null, mapDispatchProps)(AddPost);
