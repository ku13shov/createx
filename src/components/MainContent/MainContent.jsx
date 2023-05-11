import { ReactComponent as Illustration } from "../../assets/images/illustration.svg";
import Button from "../Button/Button";
import Container from "../Header/Container";
import styles from "./MainContent.module.scss";

function MainContent() {
    return (
        <div className={styles.content}>
            <Container>
                <div className={styles.info}>
                    <div className={styles.wrapper}>
                        <Button mainClassName="play" />
                    </div>
                </div>

                <Illustration />
            </Container>
        </div>
    );
}

export default MainContent;
