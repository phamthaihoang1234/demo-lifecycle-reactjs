import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('initialization');
    this.state = {
      component: 'Component Init'
    }
  }
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  updateState = () => {
    this.setState({
      component: 'New State'
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate ' + nextState.component);
    return false;// mặc định return true nếu trả về flase
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate ' + nextState.component);

  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate ' + prevState.component);

  }

  render() {
    console.log('render');
    // console.log(this.state.component);
    return (
        <div className="App">
          <button type="button" className="btn btn-primary" onClick={() => this.updateState()}>Click Me</button>
        </div>
    );
  }
}

export default App;
