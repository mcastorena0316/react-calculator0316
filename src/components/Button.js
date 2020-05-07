import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <button type="button">{name}</button>
    );
  }
}

Button.propTypes = { name: PropTypes.string.isRequired };
export default Button;
