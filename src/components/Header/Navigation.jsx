import styles from "./Navigation.module.scss";

function Navigation() {
    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <a className={styles.link} href="#">About Us</a>
                </li>
                <li>
                    <a className={styles.link} href="#">Courses</a>
                </li>
                <li>
                    <a className={styles.link} href="#">Events</a>
                </li>
                <li>
                    <a className={styles.link} href="#">Blog</a>
                </li>
                <li>
                    <a className={styles.link} href="#">Contacts</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
