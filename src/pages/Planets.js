import React from "react";
import { connect } from "react-redux";

import Table from "../components/Table";
import { getPlanets } from "../actions";

class Planets extends React.Component {
  componentDidMount() {
    this.props.getPlanets();
  }
  render() {
    return (
      <div>
        <h1>Planets page component</h1>
        <Table />
      </div>
    );
  }
}
export default connect(null, { getPlanets })(Planets);
