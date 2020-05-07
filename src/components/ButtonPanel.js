import React from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  renderButtons() {
    return <Button />;
  }

  render() {
    return (
      <div>
        {this.renderButtons()}
        {this.renderButtons()}
      </div>
    );
  }
}

export default ButtonPanel;
