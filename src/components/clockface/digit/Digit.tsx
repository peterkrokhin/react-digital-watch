import styles from './Digit.module.css';


export const Digit = () => {
  return (
    <div>
      <div className={styles.digit}>
            <div className={styles.horizontal_area}>
                <div className={styles.horizontal_line_on}></div>
            </div>
            <div className={styles.vertical_area}>
                <div className={styles.vertical_line_on}></div>
                <div className={styles.vertical_line_on}></div>
            </div>
            <div className={styles.horizontal_area}>
                <div className={styles.horizontal_line_on}></div>
            </div>
            <div className={styles.vertical_area}>
                <div className={styles.vertical_line_off}></div>
                <div className={styles.vertical_line_off}></div>
            </div>
            <div className={styles.horizontal_area}>
                <div className={styles.horizontal_line_off}></div>
            </div>
        </div>
    </div>
  );
};
