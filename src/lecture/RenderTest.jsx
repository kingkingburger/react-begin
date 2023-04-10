import React, { Component, useCallback, useEffect, useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("handleClick start:", count); // 1. 현재 count 값 출력
    setCount(count + 1); // 2. count 상태값 변경
    console.log("handleClick end:", count); // 3. 변경 전 count 값 출력
  };

  console.log("render:", count); // 4. 렌더링 시점에 현재 count 값 출력

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Test;
