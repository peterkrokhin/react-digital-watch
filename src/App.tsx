import { Clockface } from './components/clockface/Clockface';

const clockTime = {
    hoursFistDigit: 1,
    hoursSecondDigit: 2,
    minutesFirstDigit: 0,
    minutesSecondDigit: 0,
    pointsIndicatorOn: true
}

export const App = () => {
    return (
        <div className="App">
            <Clockface clockTime={clockTime}/>
        </div>
    );
}
