import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import Card from "./components/Card";
import Heading from "./components/Heading";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = [
    "Organic Yogurt",
    "Dark Green Vegetables",
    "Whole Grains",
    "Beans and Lentils",
    "Flaxseed, Nuts and Seeds",
  ];

  return (
    <Card>
      <Heading />
      <FoodInput />
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </Card>
  );
}

export default App;
