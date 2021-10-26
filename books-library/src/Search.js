// import { useState } from "react";

function Search() {
  function handleSearch(e) {}
  return (
    <>
      <input
        className="input-field"
        type="text"
        placeholder="Enter Book Name"
        onChange={handleSearch}
      ></input>
    </>
  );
}

export default Search;
