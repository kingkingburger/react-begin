import React from "react";
import Tr from "./Tr";

const Table = ({ onClick, tableData }) => {
  return (
    <table onClick={onClick}>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr rowData={tableData[i]} />
        ))}
      {/*<Tr>{""}</Tr>*/}
    </table>
  );
};

Table.displayName = "Table";
export default Table;
