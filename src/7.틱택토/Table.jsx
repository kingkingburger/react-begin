import React from "react";
import Tr from "./Tr";

const Table = ({ onClick, tableData, dispatch }) => {
  return (
    <table onClick={onClick}>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr rowIndex={i} rowData={tableData[i]} dispatch={dispatch} />
        ))}
      {/*<Tr>{""}</Tr>*/}
    </table>
  );
};

Table.displayName = "Table";
export default Table;
