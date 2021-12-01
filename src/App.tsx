import { Clockface } from './components/clockface/Clockface';
import styles from './App.module.css';
import { Clock } from './domain/core/Clock';

const clock = new Clock();
clock.start();

export const App = () => {
    return (
        <div className={styles.clockface_container}>
            <Clockface clock={clock}/>
        </div>
    );
};
