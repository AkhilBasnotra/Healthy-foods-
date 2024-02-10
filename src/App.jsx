import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import Card from "./components/Card";
import Heading from "./components/Heading";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";

function App() {
  const [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      let newItem = [...foodItems, newFoodItem];
      setFoodItems(newItem);
      e.target.value = "";
    }
  };

  return (
    <Card>
      <Heading />
      <FoodInput handleKey={onKeyDown} />
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </Card>
  );
}

export default App;
