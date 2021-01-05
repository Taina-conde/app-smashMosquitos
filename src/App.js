import './App.css';
import { Route } from 'react-router-dom';
import InitialMenu from './Components/InitialMenu';

function App() {
  return (
    <div className="App">
      
      <Route
        exact path = "/"
        render = {() => (
          <div>
            <InitialMenu/>
          </div>
        )}/>
      <Route/>
      <Route/>
      <Route/>
    </div>
  );
}

export default App;
