import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("")
  return (
    <div className="search-section">
      Search for your favorite shows
      <div className="search-input">
        <input
          className="search-box"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="btn-search"
          onClick={() => props.search(search)}
        >Search</button>
      </div>
    </div>
  );
}

export default Search;
