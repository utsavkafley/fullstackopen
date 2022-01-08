import React from "react";

const Filter = ({ searchString, filterHandler }) => {
  return (
    <>
      filter names with <input value={searchString} onChange={filterHandler} />
    </>
  );
};

export default Filter;
