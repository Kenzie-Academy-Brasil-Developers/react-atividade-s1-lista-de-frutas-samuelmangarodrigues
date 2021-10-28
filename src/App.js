import "./App.css";
import { useState } from "react";
import ListFruits from "./components/ListFruits";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2, id: 1 },
    { name: "cherry", color: "red", price: 3, id: 2 },
    { name: "strawberry", color: "red", price: 4, id: 3 },
  ]);
  const filterFruits = () => {
    const redFruits = fruits.filter((fruit) => fruit.color === "red");
    return setFruits(redFruits);
  };
  const totalPrice = fruits.reduce((acc, val) => {
    return val.price + acc;
  }, 0);
  return (
    <div className="App">
      <header className="App-header">
        <ListFruits fruits={fruits} totalPrice={totalPrice} />
        <button className="BtnRed" onClick={filterFruits}>
          Frutas vermelhas
        </button>
      </header>
    </div>
  );
}

export default App;
