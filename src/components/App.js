import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    console.log(calculate({ total: '4', next: '20', operation: '÷' }, '='));
    return (
      <div className="app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
