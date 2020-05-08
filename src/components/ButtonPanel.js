import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  renderButtons(i) {
    return (
      <Button name={i} />
    );
  }

  render() {
    return (
      <div>
        <div className="group1">
          {this.renderButtons('AC')}
          {this.renderButtons('+/-')}
          {this.renderButtons('%')}
          {this.renderButtons('÷')}
        </div>
        <div className="group2">
          {this.renderButtons('7')}
          {this.renderButtons('8')}
          {this.renderButtons('9')}
          {this.renderButtons('X')}
        </div>
        <div className="group3">
          {this.renderButtons('4')}
          {this.renderButtons('5')}
          {this.renderButtons('6')}
          {this.renderButtons('-')}
        </div>
        <div className="group4">
          {this.renderButtons('1')}
          {this.renderButtons('2')}
          {this.renderButtons('3')}
          {this.renderButtons('+')}
        </div>
        <div className="group4">
          {this.renderButtons('0')}
          {this.renderButtons(' .')}
          {this.renderButtons('=')}
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
