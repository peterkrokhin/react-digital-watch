import { Digit } from './components/clockface/digit/Digit';

export const App = () => {
  return (
    <div className="App">
      Hello
      <Digit number={0}/>
      <Digit number={1}/>
      <Digit number={2}/>
      <Digit number={3}/>
      <Digit number={4}/>
      <Digit number={5}/>
      <Digit number={6}/>
      <Digit number={7}/>
      <Digit number={8}/>
      <Digit number={9}/>
    </div>
  );
}
