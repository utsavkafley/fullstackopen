import React from "react";

const Filter = ({ filterText, filterChangeHandler }) => {
  return (
    <>
      find countries{" "}
      <input type="text" value={filterText} onChange={filterChangeHandler} />
    </>
  );
};

export default Filter;
