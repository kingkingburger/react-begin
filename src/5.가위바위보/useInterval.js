import { useEffect, useRef, useState } from "react";

// const [isRunning, setRunning] = useState(true);

// callback 부분
// useInterval(() =>{
//   console.log('hello')
// }, isRunning ? 100 : null)

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  return savedCallback.current;
}
export default useInterval;
