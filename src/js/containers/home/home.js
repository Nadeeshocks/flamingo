import React, { Component } from 'react';
import { connect } from "react-redux";
import ShowCase from "../../components/showcase/showcase";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <ShowCase />
      </React.Fragment>
    );
  }
}

export default Home;
