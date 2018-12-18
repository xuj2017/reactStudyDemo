import React, { Component,Fragment } from 'react';
import logo from './logo.svg';
import {CSSTransition} from 'react-transition-group';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      show:true
    }
  }

  render() {
    return (
      <Fragment>
        <CSSTransition 
          in={this.state.show}
          timeout={1000}
          
        >
           <div> htllo world</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    );
  }

  handleToggle(){

  }
}

export default App;
