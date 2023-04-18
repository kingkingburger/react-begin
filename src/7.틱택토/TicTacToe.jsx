import React, { useState, useReducer, useRef, useCallback } from "react";
import Table from "./Table";

const initialState = {
  winner: "",
  turn: "o",
  tableData: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};

// 이안에서 state들이 어떻게 바뀔지를 적어주는 것입니다.
let SET_WINNER = "SET_WINNER";
const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      //state.winner = action.winner; 이렇게 하면 안됨
      return {
        ...state,
        winner: action.winner,
      };
  }
};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClickTable = useCallback(() => {
    dispatch({ type: "SET_WINNER", winner: "o" });
  }, []);

  return (
    <>
      <Table onClick={onClickTable} tableData={state.tableData} />{" "}
      {state.winner && <div>{state.winner}님의 승리</div>}
    </>
  );
};

export default TicTacToe;
