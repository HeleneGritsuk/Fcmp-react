import React from 'react';
import styles from '../../styles/FilterBlock.css.js';

class Filter extends React.Component {

  render() {
    let searchInput;

    return (
      <div style = {styles.searchWrapper}>
        Search:
        {' '}
        <input style = {styles.searchInput}
          ref={node => {
            searchInput = node;
          }}
          onChange={
            () => this.props.onInputChange(searchInput.value)
          }
        />
      </div>
    );
  }

}

export default Filter;
