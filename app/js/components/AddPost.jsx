import React from 'react';
import { connect } from 'react-redux';

import { addPost } from '../actions';

const inputWrapper = {
  width: '47%'
};
const input = {
  width: '100%'
};
const formWrapper = {
  paddingLeft: '40px',
  width: '500px'
}
const formHeader = {
  display: 'flex',
  justifyContent: 'space-between'
}
const textArea = {
  width: '100%'
}
const textAreaWrapper = {
  width: '100%'
}

let AddPost = ({ dispatch }) => {
  let author;
  let textInput;
  let postTitle;

  return (
    <div style = {formWrapper}>
      <div style = {formHeader}>
        <div style= {inputWrapper}>
          <div> Author:</div>
          <input ref={node => { author = node;  }} style= {input} />
        </div>
        <div style= {inputWrapper}>
          <div> Title:</div>
          <input ref={node => { postTitle = node;  }} style= {input} />
        </div>
      </div>
      <div style= {textAreaWrapper}>
        <div> Text:</div>
        <textarea ref={node => {
          textInput = node;
        }} style= {textArea} >
        </textarea>
      </div>
      <div>
        <button onClick={() => {
          dispatch(addPost(author.value, textInput.value, postTitle.value));
          author.value = '';
          textInput.value = '';
          postTitle.value = '';
          }}>

        Add Post
        </button>
      </div>
    </div>

  );
};
export default connect()(AddPost);
