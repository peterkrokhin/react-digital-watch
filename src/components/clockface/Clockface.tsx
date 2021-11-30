import { Digit } from "./digit/Digit";
import { Points } from "./points/Points";
import styles from './Clockface.module.css';

export const Clockface = () => {
    return(
        <div id={styles.clockface}>
            <Digit number={0}/>
            <Digit number={1}/>
            <Points />
            <Digit number={2}/>
            <Digit number={3}/>
        </div>
    );
};
