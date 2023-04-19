import React from "react";
import Td from "./Td";

const Tr = ({ rowData, rowIndex, dispatch }) => {
  return (
    <tr>
      {Array(rowData.length)
        .fill()
        .map((td, i) => (
          <Td
            cellIndex={i}
            cellData={rowData[i]}
            rowIndex={rowIndex}
            dispatch={dispatch}
          >
            {""}
          </Td>
        ))}
    </tr>
  );
};

Tr.displayName = "Tr";
export default Tr;
