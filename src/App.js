// import Lottery from './Lottery';
import LottoBall from './LottoBall';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Lottery /> */}
      <LottoBall num={25} />
      <LottoBall num={20} />
      <LottoBall num={2} />
      <LottoBall num={15} />
    </div>
  );
}

export default App;
