const visibilityFilter = (
  state = '',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.payload.text;
    default:
      return state;
  }
};

export default visibilityFilter;
