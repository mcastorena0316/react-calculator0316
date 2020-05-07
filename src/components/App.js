import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  render() {
    return (
      <div>
        <Display />
        <ButtonPanel />
        Im app
      </div>
    );
  }
}

export default App;
