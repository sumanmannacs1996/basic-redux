import './App.css';
import { Provider } from 'react-redux';
import FunctionCakeContainer from './Components/FunctionCakeContainer';
import store from './redux/store';
import ClassCakeContainer from './Components/ClassCakeContainer';
import ClassIcecreamContainer from './Components/ClassIcecreamContainer';
import FunctionIcecreamContainer from './Components/FunctionIcecreamContainer';
import ClassUserContainer from './Components/ClassUserContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <ClassCakeContainer />
        <FunctionCakeContainer />
        <ClassIcecreamContainer />
        <FunctionIcecreamContainer />
        <ClassUserContainer />
      </div>
    </Provider>
  );
}

export default App;
