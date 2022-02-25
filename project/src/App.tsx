import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [secondStart, setSecondsStart] = useState(1500) // 25 minutes
  const [start, setStart] = useState(false)

  const toggle = () => {
    setStart(!start);
  }

  useEffect(()=>{
    if(secondStart === 0){
      alert("OVER")
      return
    }

    if(start){
      setTimeout(()=>{
        setSecondsStart(state => state-1)
      }, 1000)
    }
    
  }, [start, secondStart])

  const minutes = Math.floor(secondStart / 60)
  const seconds = secondStart % 60

  return (
    <div className="App">
      <h1>Pomodoro</h1>
      <div className="time">
        <span>{String(minutes).padStart(2, "0")}</span>
        <span>:</span>
        <span>{String(seconds).padStart(2, "0")}</span>
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${start ? 'active' : 'inactive'}`} onClick={toggle}>{start ? 'Pause' : 'Start'}</button>
      </div>
    </div>
  );
}

export default App;