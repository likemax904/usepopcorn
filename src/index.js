import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        message={["不好", "普通", "好", "很好", "非常好"]}
        color="red"
        size={48}
        defaultRate={2}
        onSetRating={setMovieRating}
        maxRating={10}
      />
      <p>電影評分為 {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      message={["不好", "普通", "好", "很好", "非常好"]}
      maxRating={5}
    />
    <Test /> */}
  </React.StrictMode>
);
