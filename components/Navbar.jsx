import Image from 'next/image';
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";
//import axios from "axios";

const Navbar = () => {

    const quantity = useSelector(state=>state.cart.quantity);
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image
                      src="/img/phone.png"
                      alt=""
                      width="42"
                      height="43"
                      objectFit="contain"
                    />
                </div>
                <div className={styles.texts}>
                    <div className={styles.texts}>ΠΑΡΑΓΓΕΙΛΕΤΕ ΤΩΡΑ!</div>
                    <div className={styles.texts}>210 41 41 41</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href="/" passHref>
                        <li className={styles.listItem}>ΑΡΧΙΚΗ ΣΕΛΙΔΑ</li>
                    </Link>
                    <li className={styles.listItem}>ΠΡΟΙΟΝΤΑ</li>
                    <li className={styles.listItem}>ΚΑΤΑΛΟΓΟΣ</li>
                    <Image src="/img/logo.png" alt="" width="200px" height="100px" />
                    <li className={styles.listItem}>ΓΕΓΟΝΟΤΑ</li>
                    <li className={styles.listItem}>BLOG</li>
                    <li className={styles.listItem}>ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ</li>
                </ul>
            </div>
             <Link href="/cart" passHref>
                <div className={styles.item}>
                    <div className={styles.cart}>
                      <Image src="/img/cart.png" alt="" width="70px" height="60px" />
                      <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Navbar;