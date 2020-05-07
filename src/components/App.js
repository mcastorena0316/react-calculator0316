import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <Display result="0" />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
