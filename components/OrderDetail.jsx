import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => { //functions we are passing
  const [customer, setCustomer] = useState(""); //empty string at the beginning
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Στοιχεία Πελάτη</h1>
        <div className={styles.item}>
          <label className={styles.label}>Ονοματεπώνυμο:</label>
          <input
            placeholder="Γιάννης Παπαδόπουλος"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Αριθμός κινητού:</label>
          <input
            type="text"
            placeholder="6999999999"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Διεύθυνση-Αριθμός-Πόλη:</label>
          <textarea
            rows={5}
            placeholder="Καραολή και Δημητρίου 10, Πειραιάς"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Παραγγείλετε!
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;