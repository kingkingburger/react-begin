import React, { useCallback } from "react";
import { CLICK_CELL, SET_TURN } from "./TicTacToe";

const Td = ({ rowIndex, cellIndex, cellData, dispatch }) => {
  const onClickTd = useCallback(() => {
    console.log(rowIndex, cellIndex);
    dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    dispatch({ type: SET_TURN, row: rowIndex, cell: cellIndex });
  }, []);

  return <td onClick={onClickTd}>{cellData}</td>;
};
Td.displayName = "Td";
export default Td;
