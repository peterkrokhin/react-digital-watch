import styles from './Digit.module.css';
import { numberToDigitMapper, defaultDigit } from './../../../domain';

interface IDigitProps {
    number: number;
}

export const Digit = ({ number }: IDigitProps) => {
    const digitsElements = numberToDigitMapper.get(number) || defaultDigit;
    const lineClasses = digitsElements.map(d => 
        d ? styles.line_on : styles.line_off);

    return (
        <div className={styles.digit}>
            <div className={styles.horizontal_area}>
                <div className={`${styles.horizontal_line} ${lineClasses[0]}`}></div>
            </div>
            <div className={styles.vertical_area}>
                <div className={`${styles.vertical_line} ${lineClasses[1]}`}></div>
                <div className={`${styles.vertical_line} ${lineClasses[2]}`}></div>
            </div>
            <div className={styles.horizontal_area}>
                <div className={`${styles.horizontal_line} ${lineClasses[3]}`}></div>
            </div>
            <div className={styles.vertical_area}>
                <div className={`${styles.vertical_line} ${lineClasses[4]}`}></div>
                <div className={`${styles.vertical_line} ${lineClasses[5]}`}></div>
            </div>
            <div className={styles.horizontal_area}>
                <div className={`${styles.horizontal_line} ${lineClasses[6]}`}></div>
            </div>
        </div>
    );
};
