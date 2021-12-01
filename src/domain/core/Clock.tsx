import { makeObservable, observable, action } from 'mobx';
import { IClockDigits } from './IClockDigit';

export class Clock {
    private static TICK_INTERVAL_MS = 1000;
    public clockDigits: IClockDigits;
    private _tickInterval: ReturnType<typeof setTimeout> | null = null;

    constructor() {
        this.clockDigits = this.getClockTime();

        makeObservable(this, {
            clockDigits: observable,
            setClockDigits: action,
        });
    }

    public start(): void {
        if (this._tickInterval === null) {
            this._tickInterval = setInterval(() => this.setClockDigits(), Clock.TICK_INTERVAL_MS);
        }
    }

    public stop(): void {
        if (this._tickInterval !== null) {
            clearInterval(this._tickInterval);
        }
    }

    public setClockDigits() {
        this.clockDigits = this.getClockTime();
        console.log(this.clockDigits);
    }

    private getClockTime(): IClockDigits {
        const nowDt = new Date();
        const hours = nowDt.getHours();
        const minutes = nowDt.getMinutes();
        const seconds = nowDt.getSeconds();
    
        return ({
            hoursFistDigit: this.getFirstAndSecondDigits(hours).firstDigit,
            hoursSecondDigit: this.getFirstAndSecondDigits(hours).secondDigit,
            minutesFirstDigit: this.getFirstAndSecondDigits(minutes).firstDigit,
            minutesSecondDigit: this.getFirstAndSecondDigits(minutes).secondDigit,
            pointsIndicatorOn: seconds % 2 ? true: false
        });
    };

    private getFirstAndSecondDigits(number: number) {
        const firstDigit = Math.trunc(number / 10);
        const secondDigit = number - firstDigit * 10;
        return ({
            firstDigit: firstDigit,
            secondDigit: secondDigit
        });
    };
}
