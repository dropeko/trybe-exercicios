import React from 'react';
import HeaderRender from './Header';
import './App.css';
import Content from './Content';

class App extends React.Component {
  render() {
    return (
      <main>
        <HeaderRender />
        <Content />
      </main>
    );
  }
}

export default App;
