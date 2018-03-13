import {
  MANUAL_SEND_BLOG,
  SEND_BLOG_SUCCESS,
  SEND_BLOG_ERROR,
  GET_POSTS_SUCCESS
} from '../../../constants';


const post = (state, action) => {
  switch (action.type) {
    case SEND_BLOG_SUCCESS:
      return {
        author: action.payload.post.author,
        text: action.payload.post.text,
        title: action.payload.post.title,
        id: action.payload.post._id
      };

    default:
      return state;
  }
};

const posts = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
    
        const list = action.payload.blogs.map( elem => {
            return {
              'author': elem.author,
              'text': elem.text,
              'title': elem.title,
              'id': elem._id
            }
        })
     return list;

    case SEND_BLOG_SUCCESS:
      return [
        ...state,
        post(undefined, action)
      ];

    default:
      return state;
  }
};


export default posts;
