import React from "react";

/*
props that need assigning on usage:
renderTableHeaders: should return a <tr> with <th> items containing the column headers
renderTableRows: should render X <tr>s where X is the number of rows, containing <td>s with table rows
*/

//see https://blog.logrocket.com/creating-react-sortable-table/ for how table sorting works
class Table extends React.Component {
  render() {
    return (
      <div>
        <h2>Table component</h2>
        <table className="ui celled table">
          <thead>{this.props.renderTableHeaders()}</thead>
          <tbody>{this.props.renderTableBody()}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
