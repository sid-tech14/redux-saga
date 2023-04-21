import { Provider } from 'react-redux';
import Counter from './components/counter';
import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
