import styles from './Points.module.css';

interface PointsProps {
    pointsOn: boolean;
}

export const Points = ({ pointsOn }: PointsProps) => {
    const pointOnClass = pointsOn ? styles.on : styles.off;
    return (
        <div className={styles.points}>
            <div className={`${styles.point} ${pointOnClass}`}></div>
            <div className={`${styles.point} ${pointOnClass}`}></div>
        </div>
    );
};
