import styles from "./FoodInput.module.css";

let FoodInput = () => {
  return (
    <input
      type="text"
      placeholder="Enter food item"
      className={styles.foodInput}
    />
  );
};

export default FoodInput;
