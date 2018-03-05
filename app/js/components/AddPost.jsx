import React from 'react';
import { connect } from 'react-redux';

import { addPost } from '../actions';

import styles from '../styles/addPost.css.js'

class AddPost extends React.Component {
 render() {
    const {addPost}  = this.props;
    let author;
    let textInput;
    let postTitle;
   debugger;
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
           addPost(author.value, textInput.value, postTitle.value);
           author.value = '';
           textInput.value = '';
           postTitle.value = '';
           }}>

         Add Post
         </button>
       </div>
     </div>

   );
 }
}

 const mapDispatchProps = ( dispatch ) => {
   return {
     addPost: (author, textInput, postTitle) => {
       dispatch(
         addPost(author, textInput, postTitle)
       );
     }
   };
 };

export default connect(null, mapDispatchProps)(AddPost);
