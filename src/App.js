
import './App.css';
import Count from './components/count'
import {useDispatch} from 'react-redux'
function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={(e)=>dispatch({type:'INCREMENT'})}>Increament</button>
      <Count/>
      <button onClick={(e) => dispatch({ type: 'DECEREMENT' })} >Decrement</button>
    </div>
  );
}

export default App;
