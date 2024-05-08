import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <LandingPage/>
    </Provider>
  );
}

export default App;
