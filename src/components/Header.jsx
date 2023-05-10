import { ReactComponent as Logo } from '../assets/images/logo.svg';
import styles from './Header.module.scss';
import '../index.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.inner}>
                    <a href="#">
                        <Logo />
                    </a>
                </div>
            </div>
        </header>
    );
}