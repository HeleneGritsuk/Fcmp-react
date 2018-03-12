import React from 'react';
import { connect } from 'react-redux';

import { setSearchTerm } from '../../redux/actions';
import Filter from './Filter.jsx';

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

class FilterList extends React.Component {
  render() {
    const { onFilterChange } = this.props;

    return (
      <Filter onInputChange = {onFilterChange}/>
    );
  }
}

export default connect(
  mapStateProps,
  mapDispatchProps
)(FilterList);
