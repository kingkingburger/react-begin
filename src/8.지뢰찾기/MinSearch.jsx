import { useReducer } from "react";
import Table from "./Table";
import Form from "./Form";

const initialState = {
  tableData: [],
  timer: 0,
  result: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const MinSearch = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Table />
      <Form />
      <div>{state.timer}</div>
      <Table />
      <div>{state.result}</div>
    </>
  );
};
export default MinSearch;
