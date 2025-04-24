import Image from 'next/image'
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/background.png" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        Ένα εστιατόριο, γεμάτο ...Ιταλία! Δοκιμάστε μια από τις προτάσεις μας, και ...αφεθείτε!
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Περιηγηθείτε στον κατάλογό μας!</h1>
                    <p className={styles.text}>
                        Κεντρικά: Καραολή και Δημητρίου
                        <br /> Πειραιάς
                        <br /> 18450
                    </p> 
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>Ώρες διανομής</h1>
                    <p className={styles.text}>
                        Καθημερινά
                        <br /> 13.00 - 00.00
                    </p> 
                </div>
            </div>           
        </div>
    );
};

export default Footer;