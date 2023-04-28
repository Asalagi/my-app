import logo from './logo.svg';
import './My-App.css';
import HorseComponent from './horse-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Welcome!</h1>
      </header>
      <div>
      <p>Please Login</p>
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" />
      </form>
      </div>
    </div>
  );
}

export default App;
