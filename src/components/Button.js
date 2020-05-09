import React from 'react';
import PropTypes from 'prop-types';


// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clickHandler } = this.props;
    const { buttonName } = this.props;
    return clickHandler(buttonName);
  }

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
        onClick={this.handleClick}
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
  clickHandler: null,
};

Button.propTypes = {
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
  buttonName: PropTypes.string.isRequired,

};

export default Button;
