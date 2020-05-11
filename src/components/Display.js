import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { operator, result } = props;
  return (
    <div className="display">
      <h4 className="display-operator">
        {operator}
      </h4>
      <h4 className="display-result">
        {result}
      </h4>
    </div>
  );
};

Display.defaultProps = {
  result: '0',
  operator: null,
};

Display.propTypes = {
  result: PropTypes.string,
  operator: PropTypes.string,
};

export default Display;
