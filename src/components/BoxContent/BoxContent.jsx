import styles from './BoxContent.module.scss';

function BoxContent({children}) {
    return (
        <div className={styles.content}>
            {children}
        </div>
    );
}

export default BoxContent;