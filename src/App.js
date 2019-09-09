import React from 'react';
import './App.scss';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getDifference = this.getDifference.bind(this)
  }
  componentDidMount() {
    this.getDifference();
  }

  getDifference() {
    const initialDate = moment('2019-01-01');
    const actualDate = moment('2019-09-09');

    const diasPasados = actualDate.diff(initialDate, 'days');
    console.log(diasPasados);
    const diasRestantes = 365 - diasPasados;
    console.log(diasRestantes);
  }

  render(){
    return (
      <React.Fragment>
        <header className="header">
          <h1 className="header__title">¿Cuánto tiempo llevamos?</h1>
        </header>
        <main>
          <div className="progress__container">
            <progress className="progress__bar" max="365" value="251"></progress>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
