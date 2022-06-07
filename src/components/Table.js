import React from "react";
import { getPlanets } from "../actions";

class Table extends React.Component {
  render() {
    getPlanets();
    return <div>Table component</div>;
  }
}

export default Table;