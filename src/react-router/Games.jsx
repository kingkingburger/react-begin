import React, { useMemo, useReducer } from "react";
import {
  BrowserRouter,
  HashRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import NumberBaseball from "../3.숫자야구/NumberBaseballClass";
import RSP from "../5.가위바위보/RSPClass";
import Lotto from "../6.로또/LottoClass";
import GameMacherClass from "./GameMacherClass";
const Games = ({ match, location, history }) => {
  return (
    <HashRouter>
      <Link to="/game/number-baseball">숫자야구</Link>
      &nbsp;
      <Link to="/game/rock-scissors-paper">가위바위보</Link>
      &nbsp;
      <Link to="/game/lotto-generator">로또</Link>
      &nbsp;
      <Link to="/game/index">게임 매쳐</Link>
      <Routes>
        <Route path="/game/:name" element={<GameMacherClass />} />
      </Routes>
    </HashRouter>
  );
};

export default Games;
