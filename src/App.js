import React from 'react';
import './App.scss';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.hey = this.hey.bind(this)
  }
  componentDidMount() {
    this.hey();
  }
  hey() {
    let hey = moment().calendar(); 
    console.log(hey)
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>¿Cuánto tiempo llevamos?</p>
        </header>
        <main>

        </main>
      </div>
    );
  }
}

export default App;
