import React, { useState, useReducer, useRef } from "react";
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
const reducer = (state, action) => {};

const TicTacToe = () => {
  // const [winner, setWinner] = useState("");
  // const [turn, setTurn] = useState("o");
  // const [tableData, setTAbleData] = useState([
  //   ["", "", ""],
  //   ["", "", ""],
  //   ["", "", ""],
  // ]);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Table /> {winner && <div>{winner}님의 승리</div>}
    </>
  );
};

export default TicTacToe;
