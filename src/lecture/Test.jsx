import { useCallback, useEffect, useState } from "react";

export default function Practice() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const onClickHandle1 = useCallback(() => {}, []);
  useEffect(() => {
    console.log("useEffect 랜더링");

    setCount(count + 1);
    fetch(`data/product.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("데이터 받기 성공", "count : ", count);
        setProducts(data);
        console.log(`data : ${data} count : ${count}`);
      })
      .finally(() => {
        console.log("finally", count);
      });
  }, []);
  return (
    <div>
      <button onClick={onClickHandle1}></button>
    </div>
  );
}
