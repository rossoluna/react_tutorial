import React from "react";
import { useState, useEffect } from "react";


const App: React.FC = () => {
  const [count, setCount] = useState(0)

  // ボタンを押したときの動作
  const onclick = () => {
    setCount(count + 1)  
  }

  return (
    <>
      {count}<br />
      <button 
        onClick={onclick}
      >
        カウントアップ
      </button>
    </>
  )
}

export default App;
