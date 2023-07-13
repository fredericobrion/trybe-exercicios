import { useSelector, useDispatch } from 'react-redux';
import { actionCreator } from './redux/actions';
import { clickCounter } from './redux/actions';
import './App.css';

type RootState = {
  counterReducer: {
    count: number;
    clicks: number;
  };
};

function App() {
  const rootState = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  function handleClick(count = 1) {
    dispatch(actionCreator(count));
    dispatch(clickCounter());
  }

  return (
    <div>
      <h1>Contador</h1>
      <h2>{rootState.counterReducer.count}</h2>
      <h1>Clicks</h1>
      <h2>{rootState.counterReducer.clicks}</h2>
      <button onClick={() => handleClick()}>Incrementa 1</button>
      <button onClick={() => handleClick(5)}>Incrementa 5</button>
    </div>
  );
}

export default App;
