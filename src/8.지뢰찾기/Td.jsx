import React, { memo, useCallback, useContext, useEffect, useRef } from "react";
import {
  CLICK_CELL,
  SET_TURN,
  TableContext,
  OPEN_CELL,
  CODE,
} from "./MineSearch";
import Table from "./Table";

const getTdStyle = (code) => {
  switch (code) {
    case code.NORMAL:
    case code.MINE:
      return {
        background: "#444",
      };
    case code.CLICKED_MINE:
    case code.OPENED:
      return {
        background: "white",
      };
    case code.QUESTION_MINE:
    case code.QUESTION:
      return {
        background: "yellow",
      };
    case code.FLAG_MINE:
    case code.FLAG:
      return {
        background: "red",
      };
    default:
      return {
        background: "white",
      };
  }
};
const getTdText = (code) => {
  console.log("getTdtext");
  switch (code) {
    case code.NORMAL:
      return "";
    case code.MINE:
      return "X";
    case code.CLICKED_MINE:
      return "펑";
    case code.FLAG_MINE:
    case code.FLAG:
      return "!";
    case code.QUESTION_MINE:
    case code.QUESTION:
      return "?";
    default:
      return code || "";
  }
};

const Td = memo(({ rowIndex, cellIndex }) => {
  const { tableData, dispatch } = useContext(TableContext);

  const onClickTd = useCallback(() => {
    // 클릭 되었을 때 어떤 cell의 특성을 가졌는지 확인하기 위함
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.OPENED:
      case CODE.FLAG_MINE:
      case CODE.FLAG:
      case CODE.QUESTION_MINE:
      case CODE.QUESTION:

      case CODE.NORMAL:
        dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.MINE:
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
        return;
    }

    dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
  });

  return (
    <td style={getTdStyle(tableData[rowIndex][cellIndex])} onClick={onClickTd}>
      {getTdText(tableData[rowIndex][cellIndex])}
    </td>
  );
});
Td.displayName = "Td";
export default Td;
