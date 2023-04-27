import React, { memo, useCallback, useContext, useEffect, useRef } from "react";
import {
  CLICK_CELL,
  SET_TURN,
  TableContext,
  OPEN_CELL,
  CODE,
  QUESTION_CELL,
  NORMALIZE_CELL,
  FLAG_CELL,
} from "./MineSearch";
import Table from "./Table";

const getTdStyle = (code) => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return {
        background: "#444",
      };
    case CODE.CLICKED_MINE:
    case CODE.OPENED:
      return {
        background: "white",
      };
    case CODE.QUESTION_MINE:
    case CODE.QUESTION:
      return {
        background: "yellow",
      };
    case CODE.FLAG_MINE:
    case CODE.FLAG:
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
    case CODE.NORMAL:
      return "";
    case CODE.MINE:
      return "X";
    case CODE.CLICKED_MINE:
      return "펑";
    case CODE.FLAG_MINE:
    case CODE.FLAG:
      return "!";
    case CODE.QUESTION_MINE:
    case CODE.QUESTION:
      return "?";
    default:
      return code || "";
  }
};

const Td = memo(({ rowIndex, cellIndex }) => {
  const { tableData, halted, dispatch } = useContext(TableContext);

  const onClickTd = useCallback(() => {
    // halted가 들어오면 게임이 멈추게
    if (halted) {
      return;
    }
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
      default:
        return;
    }
  });

  const onRightClickTd = useCallback((e) => {
    e.preventDefault();
    // halted가 들어오면 게임이 멈추게
    if (halted) {
      return;
    }
    // 클릭 되었을 때 어떤 cell의 특성을 가졌는지 확인하기 위함
    switch (tableData[rowIndex][cellIndex]) {
      case CODE.NORMAL:
      case CODE.MINE:
        dispatch({ type: FLAG_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.FLAG_MINE:
      case CODE.FLAG:
        // 정확히 지뢰가 있는 곳인지?
        dispatch({ type: QUESTION_CELL, row: rowIndex, cell: cellIndex });
        return;
      case CODE.QUESTION_MINE:
      case CODE.QUESTION:
        // 기본 상태로 돌리기
        dispatch({ type: NORMALIZE_CELL, row: rowIndex, cell: cellIndex });
        return;
      default:
        return;
    }
  });

  return (
    <td
      style={getTdStyle(tableData[rowIndex][cellIndex])}
      onClick={onClickTd}
      onContextMenu={onRightClickTd}
    >
      {getTdText(tableData[rowIndex][cellIndex])}
    </td>
  );
});
Td.displayName = "Td";
export default Td;
