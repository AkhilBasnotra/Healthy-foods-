import styles from "./ErrorMessage.module.css";

let ErrorMessage = (props) => {
  return (
    <div className={styles.component}>
      {props.items.length === 0 && <h3> I'm still hungery</h3>}
    </div>
  );
};

export default ErrorMessage;
