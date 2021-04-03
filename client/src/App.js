import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const url = 'https://my-mern-app-demo.herokuapp.com/greeting';
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setGreeting(json.greeting);
      });
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>{greeting}</header>
    </div>
  );
}

export default App;
