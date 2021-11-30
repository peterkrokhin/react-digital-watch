import { Digit } from "./digit/Digit";
import styles from './Clockface.module.css';

export const Clockface = () => {
    return(
        <div id={styles.clockface}>
            <Digit number={0}/>
            <Digit number={1}/>
            <Digit number={2}/>
            <Digit number={3}/>
        </div>
    );
};
