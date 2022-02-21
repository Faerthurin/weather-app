import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <form id="search-form">
      <div className="search-bar" id="search-form">
        <input
          type="text"
          placeholder="search"
          id="search"
          autofocus="on"
          autocomplete="off"
        />
        <input type="submit" value="search" id="searchbtn" />
        <input type="submit" value="current" id="currentbtn" />
      </div>
    </form>
  );
}
