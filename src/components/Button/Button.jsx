import styles from "./Button.module.scss";

function Button({ children, mainClassName }) {
    return <button className={`${styles.btn} ${styles[mainClassName]}`}>{children}</button>;
}

export default Button;