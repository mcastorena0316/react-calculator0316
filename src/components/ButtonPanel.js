import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    return clickHandler(buttonName);
  }

  renderButtons(name, colorbutton, widebutton) {
    return (
      <Button
        buttonName={name}
        color={colorbutton}
        wide={widebutton}
        clickHandler={this.handleClick}
      />
    );
  }

  render() {
    return (
      <div className="button-panel">
        <div className="buttons group1">
          {this.renderButtons('AC', '#e7e7e7')}
          {this.renderButtons('+/-', '#e7e7e7')}
          {this.renderButtons('%', '#e7e7e7')}
          {this.renderButtons('÷')}
        </div>
        <div className="buttons group2">
          {this.renderButtons('7', '#e7e7e7')}
          {this.renderButtons('8', '#e7e7e7')}
          {this.renderButtons('9', '#e7e7e7')}
          {this.renderButtons('x')}
        </div>
        <div className="buttons group3">
          {this.renderButtons('4', '#e7e7e7')}
          {this.renderButtons('5', '#e7e7e7')}
          {this.renderButtons('6', '#e7e7e7')}
          {this.renderButtons('-')}
        </div>
        <div className="buttons group4">
          {this.renderButtons('1', '#e7e7e7')}
          {this.renderButtons('2', '#e7e7e7')}
          {this.renderButtons('3', '#e7e7e7')}
          {this.renderButtons('+')}
        </div>
        <div className="buttons group5">
          {this.renderButtons('0', '#e7e7e7', true)}
          {this.renderButtons('.', '#e7e7e7')}
          {this.renderButtons('=')}
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};
export default ButtonPanel;
