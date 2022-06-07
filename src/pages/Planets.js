import React from "react";
import { connect } from "react-redux";

import Table from "../components/Table";
import { getPlanets } from "../actions";

class Planets extends React.Component {
  componentDidMount() {
    this.props.getPlanets();
    //this.getPlanetWaterSurfaceArea();
    //need to update redux for each planet with the water surface area
  }
  calculateWaterSurfaceArea = () => {};

  getPlanetWaterSurfaceArea = () => {
    this.props.planets.foreach((planet) => {
      planet = { ...planet, ...{ waterSurfaceArea: "a lot" } };
    });
  };

  renderTableHeaders = () => {
    return (
      <tr>
        <th>Planet Name</th>
        <th>Climate</th>
        <th>Residents</th>
        <th>Climates</th>
        <th>Population</th>
        <th>Water Surface Area (km^2)</th>
      </tr>
    );
  };

  renderTableBody = () => {
    return this.props.planets.map((planet) => {
      return (
        <tr key={planet.name}>
          <td>{planet.name}</td>
          <td>{planet.climate}</td>
          <td>{planet.residents.length}</td>
          <td>{planet.terrain}</td>
          <td>{planet.population}</td>
          <td>xxx km^2</td>
        </tr>
      );
    });
  };

  render() {
    if (!this.props.planets) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <h1>Planets page component</h1>
        <Table
          renderTableHeaders={this.renderTableHeaders}
          renderTableBody={this.renderTableBody}
        />
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
