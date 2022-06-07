import React from "react";

class Table extends React.Component {
  renderTableRows = () => {
    return this.props.tableContent.map((item) => {
      return (
        <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.climate}</td>
          <td>{item.residents.length}</td>
          <td>{item.terrain}</td>
          <td>{item.population}</td>
          <td>surface area covered by water in km^2</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <h2>Table component</h2>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Planet Name</th>
              <th>Climate</th>
              <th>Residents</th>
              <th>Climates</th>
              <th>Population</th>
              <th>Surface Area of Water (km^2)</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
