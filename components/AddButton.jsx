import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Προσθήκη νέου προϊόντος
    </div>
  );
};

export default AddButton;