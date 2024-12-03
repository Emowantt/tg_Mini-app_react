import { useEffect } from 'react';
import Header from "./components/Header/Header"
import './App.css';

const tg = window.Telegram.WebApp;


function App() {

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
