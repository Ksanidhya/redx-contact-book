
import './styles/App.scss';
import NavBar from './components/elements/NavBar'
import Contacts from './components/contacts/Contacts';
import { Provider } from 'react-redux';
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <NavBar />
      <div className="container">
        <div className="py-3">
          <Contacts/>
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
