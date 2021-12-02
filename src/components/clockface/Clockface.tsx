import { observer } from 'mobx-react'
import { Digit } from './digit/Digit';
import { Points } from './points/Points';
import styles from './Clockface.module.css';
import { Clock } from './../../domain';
import { useEffect } from 'react';

let clock = new Clock();

export const Clockface = observer(() => {
    useEffect(() => {
        clock.start();
        return () => clock.stop();
    }, []);

    const digits = clock.clockDigits;
    return(
        <div id={styles.clockface}>
            <Digit number={digits.hoursFistDigit}/>
            <Digit number={digits.hoursSecondDigit}/>
            <Points pointsOn={digits.pointsIndicatorOn}/>
            <Digit number={digits.minutesFirstDigit}/>
            <Digit number={digits.minutesSecondDigit}/>
        </div>
    );
});
