import React from "react";

export default function CList() {
  return (
    <ul className="current-list">
      <li id="description"></li>
      <li>
        Wind: <span id="wind"></span>5 km/h
      </li>
      <li>
        Humidity: <span id="humidity"></span>2 %
      </li>
    </ul>
  );
}
