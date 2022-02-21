import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Current from "./Current";
import CList from "./CList";
import Search from "./Search";
import Footer from "./Footer";

import "./index.css";

function App() {
  return (
    <div className="background position">
      <Current />
      <CList />
      <Search />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
