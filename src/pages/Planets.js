import React from "react";
import { connect } from "react-redux";

import Table from "../components/Table";
import { getPlanets } from "../actions";

class Planets extends React.Component {
  componentDidMount() {
    this.props.getPlanets();
  }

  render() {
    if (!this.props.planets) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <h1>Planets page component</h1>
        <Table tableContent={this.props.planets}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //Object.parse parses out the objects from the values of the KV pairs in state.planets
  return {
    planets: Object.values(state.planets),
  };
};
export default connect(mapStateToProps, { getPlanets })(Planets);
