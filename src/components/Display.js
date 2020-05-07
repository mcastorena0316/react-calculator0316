import React from 'react';
import PropTypes from 'prop-types';


// eslint-disable-next-line react/prefer-stateless-function
class Display extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <div>
        {result}
      </div>
    );
  }
}

Display.propTypes = { result: PropTypes.string.isRequired };

export default Display;
