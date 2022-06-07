import React from "react";

class Table extends React.Component {
  render() {
    return (
      <div>
        <h2>Table component</h2>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Head1</th>
              <th>Head2</th>
              <th>Head3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>row1</td>
              <td>row2</td>
              <td>row3</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
