import React from 'react';
import styles from '../../styles/addPost.css.js';

class AddPostForm extends React.Component {

  render() {
    let author;
    let textInput;
    let postTitle;

    return (
      <div style={styles.formWrapper}>
        <div style={styles.formHeader}>
          <div style={styles.inputWrapper}>
            <div>
                            Author:</div>
            <input ref={node => {
              author = node;
            }} style={styles.input}
            />
          </div>
          <div style={styles.inputWrapper}>
            <div>
                            Title:</div>
            <input ref={node => {
              postTitle = node;
            }} style={styles.input}
            />
          </div>
        </div>
        <div style={styles.textAreaWrapper}>
          <div>
                        Text:</div>
          <textarea ref={node => {
            textInput = node;
          }} style={styles.textArea}
          />
        </div>
        <div>
          <button onClick={() => {
            this.props.onClick(author.value, textInput.value, postTitle.value);
            author.value = '';
            textInput.value = '';
            postTitle.value = '';
          }}
          >

            Add Post
          </button>
        </div>
      </div>
    );
  }

}

export default AddPostForm;
