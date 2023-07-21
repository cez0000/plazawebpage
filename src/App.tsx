import { useState } from 'react'
import './App.css'
import MainPage from './main-page/main-page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainPage></MainPage>
      <h1>Discover Unlimited</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Przestan sie głowić nad obiektowym, Zarzyj <a href='https://www.chemisit.pl/baza-wiedzy/n-etylo-heksedron-hex-en'>Hexen</a>
      </p>
    </>
  )
}

export default App
