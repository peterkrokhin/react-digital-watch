import styles from './Digit.module.css';

const numberToDigitMapper: Map<number, boolean[]> = new Map([
    [0, [true, true, true, false, true, true, true]],
    [1, [false, false, true, false, false, true, false]],
    [2, [true, false, true, true, true, false, true]],
    [3, [true, false, true, true, false, true, true]],
    [4, [false, true, true, true, false, true, false]],
    [5, [true, true, false, true, false, true, true]],
    [6, [true, true, false, true, true, true, true]],
    [7, [true, false, true, false, false, true, false]],
    [8, [true, true, true, true, true, true, true]],
    [9, [true, true, true, true, false, true, true]],
]);
const defaultDigitElements = [true, true, true, true, true, true, true];

interface DigitProps {
    number: number;
}

export const Digit = ({ number }: DigitProps) => {
    const digitsElements = numberToDigitMapper.get(number) || defaultDigitElements;
    const lineClasses = digitsElements.map(d => 
        d ? styles.line_on : styles.line_off);

    return (
        <div>
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
        </div>
    );
};
