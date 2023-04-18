import React from "react";
import Td from "./Td";

const Tr = ({ rowData }) => {
  console.log("tr rendering");
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td) => (
          <Td>{""}</Td>
        ))}
    </tr>
  );
};

Tr.displayName = "Tr";
export default Tr;
