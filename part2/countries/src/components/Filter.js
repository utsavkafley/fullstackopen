import React from "react";

const Filter = ({ filterText, handleFilterChange }) => {
  return (
    <>
      find countries{" "}
      <input type="text" value={filterText} onChange={handleFilterChange} />
    </>
  );
};

export default Filter;
