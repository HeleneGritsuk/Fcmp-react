import React from 'react';
import { connect } from 'react-redux';

import { addPost } from '../actions/actionCreators';

import styles from '../styles/addPost'

let AddPost = ({ dispatch }) => {
  let author;
  let textInput;
  let postTitle;

  return (
    <div style = {styles.formWrapper}>
      <div style = {styles.formHeader}>
        <div style= {styles.inputWrapper}>
          <div> Author:</div>
          <input ref={node => { author = node;  }} style= {styles.input} />
        </div>
        <div style= {styles.inputWrapper}>
          <div> Title:</div>
          <input ref={node => { postTitle = node;  }} style= {styles.input} />
        </div>
      </div>
      <div style= {styles.textAreaWrapper}>
        <div> Text:</div>
        <textarea ref={node => {
          textInput = node;
        }} style= {styles.textArea} >
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
