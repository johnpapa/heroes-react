import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Async extends Component {
  state = {
    Component: void 0
  };

  async componentDidMount() {
    const res = await this.props.provider();
    this.setState({ Component: withRouter(res.default) });
  }

  render() {
    const { Component } = this.state;
    return (
      <React.Fragment>
        {Component ? <Component /> : <div>Loading...</div>}
      </React.Fragment>
    );
  }
}

export default Async;
