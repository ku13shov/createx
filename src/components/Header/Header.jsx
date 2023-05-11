import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import styles from "./Header.module.scss";
import Container from "./Container";
import Navigation from "./Navigation";
import Button from "../Button/Button";
import Login from "./Login";

export default function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.box}>
                        <a className={styles.link} href="#">
                            <Logo />
                        </a>
                        <Navigation />
                    </div>

                    <div className={styles.box}>
                        <Button>Get consultation</Button>
                        <Login />
                    </div>
                </div>
            </Container>
        </header>
    );
}
