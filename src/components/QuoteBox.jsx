import { useState } from "react";
import React from "react";
import pharses from "../pharses.json";
import "../App.css";

const colors = [
  "#F44336",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#00BCD4",
  "#4CAF50",
  "#8BC34A",
  "#FF9800",
  "#FF9800",
];

const QuoteBox = () => {
  const colortitle = document.getElementById("h3");
  const colortitles = document.getElementById("h4");
  const colorbutton = document.getElementById("bt");

  const pharseRandom = Math.floor(Math.random() * pharses.length);
  const [index, setIndex] = useState(pharseRandom, colortitle, colortitles);
  const changePharse = () => {
    const pharseRandom = Math.floor(Math.random() * pharses.length);
    setIndex(pharseRandom, colortitle, colortitles);

    const colorRandom = Math.floor(Math.random() * colors.length);
    document.body.style = `background: ${colors[colorRandom]}`;
    colortitle.style = `color: ${colors[colorRandom]}`;
    colortitles.style = `color: ${colors[colorRandom]}`;
    colorbutton.style = `color: ${colors[colorRandom]}`;
    colorbutton.style = `background: ${colors[colorRandom]}`;
  };

  return (
    <div className="QuoteBox">
      <i className="fa-solid fa-quote-right  "></i>
      <h3 id="h3">{pharses[index].quote}</h3>
      <h4 id="h4">{pharses[index].author}</h4>
      <button id="bt" onClick={changePharse}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default QuoteBox;
