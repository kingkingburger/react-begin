// const React = require('React')
// const {Component} = React
import React, { Component, createRef, useState } from "react";
import TryClass from "./TryClass";
import Try from "./Try";

function getNumbers() {
  // 숫자 4개를 랜덤하게 뽑아주는 함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseball = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers); // lazy init
  const [tries, setTries] = useState([]);

  const onSubmitForm = (e) => {
    console.log("동작함");
    const { value, tries, answer } = this.state;
    e.preventDefault();
    if (value === answer.join("")) {
      setResult("홈런!");
      setTries((prevState) => {
        return [...prevState.tries, { try: value, result: "홈런!" }];
      });
      alert("게임을 다시 시작합니다.");
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
      this.inputRef.current.focus();
    } else {
      // 답이 틀렸으면
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        // 10번 이상 틀렸을 때
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(",")}였습니다.`);
        alert("게임을 다시 시작합니다.");
        setValue("");
        setAnswer(getNumbers());
        setTries([]);
        this.inputRef.current.focus();
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevState) => {
          [
            ...prevState,
            { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다` },
          ];
        });
        setValue("");

        this.inputRef.current.focus();
      }
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChangeInput} />
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <TryClass key={`${i + 1}차 시도 :`} tryInfo={v} />;
        })}
      </ul>
    </>
  );
};

// export const hello = 'hello' // import { hello }
export default NumberBaseball; // import Number Baseball
