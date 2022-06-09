import React from "react";
import { connect } from "react-redux";

import Table from "../components/Table";
import { getPlanets } from "../actions";
import { GET_PLANETS_ERROR } from "../actions/types";

class Planets extends React.Component {
  componentDidMount() {
    this.props.getPlanets();
  }

  calcWaterSurfaceArea(diameter, surface_water) {
    if (diameter === "unknown" || surface_water === "unknown") return "?";
    const surfaceArea = 4 * Math.PI * ((diameter / 2) ^ 2);
    return Math.floor((surface_water * surfaceArea) / 100);
  }

  /*
  formatString() returns:
    "?" if value is "unknown"
    value when value isn't able to convert to a number
    otherwise, value as a number with commas (at this point,  logically, it must be a number)
  */
  formatString = (num) => {
    if (num === "unknown") return "?";
    const ret = Math.floor(num).toLocaleString();
    return ret === "NaN" ? num : ret;
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
          <td>
            <a href={planet.url} target="blank">
              {planet.name}
            </a>
          </td>
          <td>{this.formatString(planet.climate)}</td>
          <td>{this.formatString(planet.residents.length)}</td>
          <td>{this.formatString(planet.terrain)}</td>
          <td>{this.formatString(planet.population)}</td>
          <td>
            {this.calcWaterSurfaceArea(planet.diameter, planet.surface_water)}
          </td>
        </tr>
      );
    });
  };

  render() {
    if (this.props.planets[0] === GET_PLANETS_ERROR) {
      return <h1>{GET_PLANETS_ERROR}</h1>;
    }
    if (this.props.planets.length < 1) return <h1>loading planets...</h1>;
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
