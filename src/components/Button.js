import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  render() {
    const { name } = this.props;
    const { color } = this.props;
    return (
      <button className={`button${name}`} style={{ backgroundColor: color }} type="button">{name}</button>
    );
  }
}

Button.defaultProps = { color: 'rgb(243, 130, 53)' };
Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Button;
