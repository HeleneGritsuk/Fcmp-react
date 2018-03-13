import React from 'react';
import { connect } from 'react-redux';

import { manualBlogSend } from '../../redux/actions';

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
    onClick: (author, text, title) => {
      dispatch(manualBlogSend({ author, text, title }));
    }
  };
};

export default connect(null, mapDispatchProps)(AddPost);
