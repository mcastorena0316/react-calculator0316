import React from 'react';
import PropTypes from 'prop-types';


// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  render() {
    const { name } = this.props;
    const { color } = this.props;
    const { wide } = this.props;
    return (
      <button
        className={`button${name}`}
        style={{
          backgroundColor: color,
          width: wide === true ? '50%' : '25%',
        }}
        type="button"
      >
        {name}
      </button>
    );
  }
}

Button.defaultProps = {
  color: 'rgb(243, 130, 53)',
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
