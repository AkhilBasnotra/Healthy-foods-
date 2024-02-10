import styles from "./FoodInput.module.css";

let FoodInput = ({ handleKey }) => {
  return (
    <input
      id={Math.random()}
      type="text"
      onKeyDown={handleKey}
      placeholder="Enter food item"
      className={styles.foodInput}
    />
  );
};

export default FoodInput;
