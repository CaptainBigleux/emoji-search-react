import { useState } from "react";

import Footer from "./components/Footer";
import Line from "./components/Line";
import Search from "./components/Search";

import emojis from "./assets/data/data.json";
import "./App.css";

const App = () => {
  const [search, setIsSearch] = useState("");
  const [maxSearch] = useState(20);

  //reset to 0 with each render
  let counter = 0;
  //simpler to build an array and use indexof for the search

  return (
    <div className="container">
      <h1 className="row-flex-center">😎 EmojiSearch 😎</h1>
      <Search search={search} setIsSearch={setIsSearch} />
      {emojis.map((elem, index) => {
        if (counter < maxSearch) {
          const { title, symbol, keywords } = elem;
          if (
            keywords.includes(search.toLowerCase()) ||
            title.toLowerCase().includes(search.toLowerCase())
          ) {
            counter++;
            return <Line key={index} title={title} symbol={symbol}></Line>;
          } else return null;
        } else return null;
      })}
      <Footer title="Made by Adrien at le reacteur" />
    </div>
  );
};

export default App;
