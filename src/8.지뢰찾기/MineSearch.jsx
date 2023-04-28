import React, { createContext, useMemo, useReducer } from "react";
import Table from "./Table";
import Form from "./Form";
import { act } from "react-dom/test-utils";

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0, // 0 이상이면 다 opened
};

export const TableContext = createContext({
  tableData: [
    [-1, -1, -1, -1, -1, -1, -1],
    [-7, -1, -1, -1, -1, -1, -1],
    [-1, -7, -1, -7, -7, -1, -1],
    [],
    [],
  ],
  halted: true,
  dispatch: () => {},
});

const initialState = {
  tableData: [],
  timer: 0,
  result: "",
  halted: false,
};

const plantMine = (row, cell, mine) => {
  console.log(row, cell, mine);
  const candidate = Array(row * cell)
    .fill()
    .map((arr, i) => {
      return i;
    });
  const shuffle = [];
  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    shuffle.push(chosen);
  }
  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }

  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / cell);
    const hor = shuffle[k] % cell;
    data[ver][hor] = CODE.MINE;
  }

  console.log(data);
  return data;
};

export const START_GAME = "START_GAME";
export const OPEN_CELL = "OPEN_CELL";
export const CLICK_CELL = "CLICK_CELL";
export const FLAG_CELL = "FLAG_CELL";
export const QUESTION_CELL = "QUESTION_CELL";
export const CLICK_MINE = "CLICK_MINE";
export const NORMALIZE_CELL = "NORMALIZE_CELL";

const reducer = (state, action) => {
  switch (action.type) {
    case START_GAME: {
      return {
        ...state,
        tableData: plantMine(action.row, action.cell, action.mine),
        halted: false,
      };
    }

    // 클릭 되었을 때 cell을 열기 위함
    case OPEN_CELL: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      tableData[action.row][action.cell] = CODE.OPENED;
      let around = [];
      // 내 윗줄이 있다면
      if (tableData[action.row - 1]) {
        // 윗줄의 3칸을 넣어줍니다.
        around = around.concat(
          tableData[action.row - 1][action.cell - 1],
          tableData[action.row - 1][action.cell],
          tableData[action.row - 1][action.cell + 1]
        );
      }
      // 왼쪽칸 오른쪽칸
      around = around.concat(
        tableData[action.row - 1][action.cell - 1],
        tableData[action.row - 1][action.cell],
        tableData[action.row - 1][action.cell + 1]
      );

      // 내 아래줄이 있다면
      if (tableData[action.row + 1]) {
        // 아래줄의 3칸을 넣어줍니다.
        around = around.concat(
          tableData[action.row + 1][action.cell - 1],
          tableData[action.row + 1][action.cell],
          tableData[action.row + 1][action.cell + 1]
        );
      }

      // 주변 8칸에 있는 지뢰가 있는부분을 샙니다.
      const count = around.filter((v) =>
        [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v)
      ).length;
      console.log(count);
      tableData[action.row][action.cell] = count;

      return {
        ...state,
        tableData,
      };
    }

    case CLICK_MINE: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      tableData[action.row][action.cell] = CODE.CLICKED_MINE;
      return {
        ...state,
        tableData,
        halted: true,
      };
    }

    case CLICK_CELL: {
      return {
        ...state,
      };
    }
    case FLAG_CELL: {
      const tableData = [...state.tableData];
      if (tableData[action.row][action.cell] === CODE.MINE) {
        tableData[action.row][action.cell] = CODE.FLAG_MINE;
      }
      tableData[action.row][action.cell] = CODE.FLAG;
      return {
        ...state,
        tableData,
      };
    }

    case QUESTION_CELL: {
      const tableData = [...state.tableData];
      if (tableData[action.row][action.cell] === CODE.FLAG_MINE) {
        tableData[action.row][action.cell] = CODE.QUESTION_MINE;
      }
      tableData[action.row][action.cell] = CODE.QUESTION;
      return {
        ...state,
        tableData,
      };
    }
    case NORMALIZE_CELL: {
      const tableData = [...state.tableData];
      if (tableData[action.row][action.cell] === CODE.QUESTION) {
        tableData[action.row][action.cell] = CODE.MINE;
      }
      tableData[action.row][action.cell] = CODE.NORMAL;
      return {
        ...state,
        tableData,
      };
    }

    default:
      return state;
  }
};

const MineSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { tableData, halted, timer, result } = state;

  const value = useMemo(
    () => ({ tableData, halted, dispatch }),
    [tableData, halted]
  );

  return (
    <TableContext.Provider value={value}>
      <Form />
      <Table />
      <div>{timer}</div>
      <div>{result}</div>
    </TableContext.Provider>
  );
};
export default MineSearch;
