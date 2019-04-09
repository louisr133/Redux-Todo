import React, { Component } from "react";
import { connect } from 'react-redux';
import './App.css';
import {adding, added} from './actions'
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList 
          added={this.props.added} 
          adding={this.props.adding}
          addValue= {this.props.addValue} 
          todo={this.props.todo}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  console.log(state)
  return {
      ...state,

  };
};

export default connect(mapStateToProps, {adding, added} )(App);