import { useState } from 'react';
import Hero from './components/Hero';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  // next video: useCallback vs useMemo
  const handleHeroClick = () => {

  }
  return (
    <div className="app">
      <h1>React Hooks - Clock</h1>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Hero name='Easy Frontend' onClick={handleHeroClick} />
    </div>
  );
}

export default App;
