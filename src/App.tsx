import logo from './hotelery-logo.svg';
import './app.css'
const counter = 0;
export default function App() {
  return (
    <div>
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>


    <main>
      <p>Value: {counter}</p>
      <button>Count up</button>
    </main>

    <footer>
      <a href="https://www.hotelery.de/">www.hotelery.de</a>
    </footer>
    </div>
  );
}

