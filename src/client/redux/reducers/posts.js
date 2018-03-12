const post = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        id: action.payload.id,
        author: action.payload.author,
        text: action.payload.text,
        title: action.payload.title
      };

    default:
      return state;
  }
};

const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        post(undefined, action)
      ];
    default:
      return state;
  }
};

export default posts;
