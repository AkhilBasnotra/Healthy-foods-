import styles from "./FoodItems.module.css";

let FoodItems = (props) => {
  return (
    <>
      <ul className={`${styles.list} list-group`}>
        {props.items.map((item) => (
          <li key={Math.random()} className={`list-group-item`}>
            {item}
            <button type="button" className={`btn btn-info ${styles.button}`}>
              BUY
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
