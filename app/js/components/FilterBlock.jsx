import React from 'react';
import { connect } from 'react-redux';

import { setSearchTerm } from '../actions/actionCreators';

const mapStateProps = (
  state
) => {
  return {
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchProps = (
  dispatch
) => {
  return {
    onFilterChange: (text) => {
      dispatch(
        setSearchTerm(text)
      );
    }
  };
};

const FilterList = ({
  visibilityFilter,
  onFilterChange

}) => (
  <p>
    Search:
    {' '}
    <input ref={node => { searchInput = node;  }} onChange={() => onFilterChange(searchInput.value)}/>
  </p>
);
let searchInput;


export default connect(
  mapStateProps,
  mapDispatchProps
)(FilterList);