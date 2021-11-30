import { Digit } from "./digit/Digit";
import { Points } from "./points/Points";
import styles from './Clockface.module.css';

interface ClockfaceProps {
    clockTime: {
        hoursFistDigit: number;
        hoursSecondDigit: number;
        minutesFirstDigit: number;
        minutesSecondDigit: number;
        pointsIndicatorOn: boolean
    }
}

export const Clockface = ({ clockTime }: ClockfaceProps) => {
    return(
        <div id={styles.clockface}>
            <Digit number={clockTime.hoursFistDigit}/>
            <Digit number={clockTime.hoursSecondDigit}/>
            <Points pointsOn={clockTime.pointsIndicatorOn}/>
            <Digit number={clockTime.minutesFirstDigit}/>
            <Digit number={clockTime.minutesSecondDigit}/>
        </div>
    );
};
