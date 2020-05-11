import React from 'react';
import PropTypes from 'prop-types';


// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  render() {
    const { buttonName } = this.props;
    const { color } = this.props;
    const { wide } = this.props;
    return (
      <button
        className={`button${buttonName}`}
        style={{
          backgroundColor: color,
          width: wide === true ? '50%' : '25%',
        }}
        type="button"
      >
        {buttonName}
      </button>
    );
  }
}

Button.defaultProps = {
  color: 'rgb(243, 130, 53)',
  wide: false,
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
