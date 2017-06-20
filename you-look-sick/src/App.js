import React from 'react';
import Header from './components/Header'
import NameForm from './components/NameForm'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NameForm />
      </div>
    );
  }
}

export default App;
