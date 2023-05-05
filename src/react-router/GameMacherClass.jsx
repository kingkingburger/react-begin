import React from "react";
import { Component } from "react";
import NumberBaseball from "../3.숫자야구/NumberBaseballClass";
import RSP from "../5.가위바위보/RSPClass";
import Lotto from "../6.로또/LottoClass";
import { Route, Routes, useLocation } from "react-router";

class GameMacherClass extends Component {
  render() {
    // let urlSearchParams = new URLSearchParams(
    //   this.props.location.search.slice(1)
    // );
    // console.log(urlSearchParams.get("page"));
    // return (
    //   <Routes>
    //     <Route path="number-baseball" element={<NumberBaseball />} />
    //     <Route path="rock-scissors-paper" element={<RSP />} />
    //     <Route path="lotto-generator" element={<Lotto />} />
    //     <Route path="*" element={<div>일치하는 게임이 없습니다.</div>} />
    //   </Routes>
    // );
    if (this.props.match.params.name === "number-baseball") {
      return <NumberBaseball />;
    } else if (this.props.match.params.name === "rock-scissors-paper") {
      return <RSP />;
    } else if (this.props.match.params.name === "lotto-generator") {
      return <Lotto />;
    }
    return <div>일치하는 게임이 없습니다.</div>;
  }
}

const WrappedComponent = (props) => {
  const location = useLocation();

  return <GameMacherClass location={location} {...props} />;
};

export default WrappedComponent;
