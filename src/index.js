import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  render(){
    return (<div style={styles}>
      <Hello name="CodeSandbox" />
      <h2>{this.props.count}</h2>
    </div>
    )
  }
}
  
let count = 0
setInterval(()=>render(<App count={count++}/>, document.getElementById('root')),1000)
