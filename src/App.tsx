import { Clockface } from './components/clockface/Clockface';
import styles from './App.module.css';

export const App = () => {
    return (
        <div className={styles.clockface_container}>
            <Clockface />
        </div>
    );
};
