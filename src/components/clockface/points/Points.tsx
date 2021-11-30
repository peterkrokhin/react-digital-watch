import styles from './Points.module.css';

export const Points = () => {
    return (
        <div className={styles.points}>
            <div className={`${styles.point} ${styles.on}`}></div>
            <div className={`${styles.point} ${styles.off}`}></div>
        </div>
    );
};
