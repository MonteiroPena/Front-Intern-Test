import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/Header';
import TreeMenu from './components/TreeMenu';
import ContentBox from './components/ContentBox';

class App extends React.Component {
  render() {
    return (
      <div>
          <Header></Header>
          <div className="container-fullwidth">
            <div className="row">
              <TreeMenu></TreeMenu>
              <ContentBox></ContentBox>
            </div>
          </div>
          
        
      </div>

    );
  }
}

export default App;
