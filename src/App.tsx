import { useEffect, useState } from 'react';
import { Clockface } from './components/clockface/Clockface';

const getFirstAndSecondDigits = (number: number) => {
    const firstDigit = Math.trunc(number / 10);
    const secondDigit = number - firstDigit * 10;
    return ({
        firstDigit: firstDigit,
        secondDigit: secondDigit
    });
};

const getClockTime = () => {
    const nowDt = new Date();
    const hours = nowDt.getHours();
    const minutes = nowDt.getMinutes();
    const seconds = nowDt.getSeconds();

    return ({
        hoursFistDigit: getFirstAndSecondDigits(hours).firstDigit,
        hoursSecondDigit: getFirstAndSecondDigits(hours).secondDigit,
        minutesFirstDigit: getFirstAndSecondDigits(minutes).firstDigit,
        minutesSecondDigit: getFirstAndSecondDigits(minutes).secondDigit,
        pointsIndicatorOn: seconds % 2 ? true: false
    });
};

export const App = () => {
    const [clockTime, setClockTime] = useState(getClockTime());
    
    useEffect(() => {
        setInterval(() => {
            setClockTime(getClockTime());         
        }, 1000);
    });

    return (
        <div className="App">
            <Clockface clockTime={clockTime}/>
        </div>
    );
};
