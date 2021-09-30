import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // this.increment = this.increment.bind(this);
    // this.dercement = this.dercement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  dercement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h2>Class counter: {this.state.count}</h2>
        <button onClick={() => this.increment()}>+</button>
        <button onClick={() => this.dercement()}>-</button>
        {/* Works with binded "this" */}
        {/* <button onClick={this.increment}>+</button>
        <button onClick={this.dercement}>-</button> */}
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}

export default ClassCounter;
