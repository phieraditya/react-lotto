// import LottoBall from './LottoBall';
import Lottery from './Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Lotto Mini" numBalls={4} maxNum={10} />
    </div>
  );
}

export default App;
