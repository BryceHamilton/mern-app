import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_URL}/greeting`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => setGreeting(json.greeting));
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <div>{greeting}</div>
      </header>
    </div>
  );
}

export default App;
