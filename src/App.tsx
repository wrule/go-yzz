import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const month = 1;

  return (
    <>
      <div>
        <a href=" " target="_blank">
          < img src={viteLogo} className="logo" alt="Vite logo" />
        </a >
        <a href="https://react.dev" target="_blank">
          < img src={reactLogo} className="logo react" alt="React logo" />
        </a >
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR1 <br />
          1月是{1 > 6 ? '下半年' : '上半年'}，英文是{month_num_to_english(1)}<br />
          2月是{2 > 6 ? '下半年' : '上半年'}，英文是{month_num_to_english(2)}<br />
          3月是{3 > 6 ? '下半年' : '上半年'}，英文是{month_num_to_english(3)}<br />
          4月是{4 > 6 ? '下半年' : '上半年'}，英文是{month_num_to_english(4)}<br />
          5月是{5 > 6 ? '下半年' : '上半年'}，英文是{month_num_to_english(5)}<br />
          6月是{6 > 6 ? '下半年' : '上半年'}，英文是{month_num_to_english(6)}<br />
          7月是{7 > 6 ? '下半年' : '上半年'}，英文是{month_num_to_english(7)}<br />
          8月是{8 > 6 ? '下半年' : '上半年'}，英文是{month_num_to_english(8)}<br />
          9月是{9 > 6 ? '下半年' : '上半年'}，英文是{month_num_to_english(9)}<br />
          10月是{10 > 6 ? '下半年' : '上半年'}，英文是{month_num_to_english(10)}<br />
          11月是{11 > 6 ? '下半年' : '上半年'}，英文是{month_num_to_english(11)}<br />
          12月是{12 > 6 ? '下半年' : '上半年'}，英文是{month_num_to_english(12)}<br />
        </p >
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p >
    </>
  )
}
function month_num_to_english(month:number){
  
  if (month==1) {
    return 'January';
  }
  if (month==2) {
    return 'February';
  }
  if (month==3) {
    return 'March';
  }
  if (month==4) {
    return 'April';
  }
  if (month==5) {
    return 'May';
  }
  if (month==6) {
    return 'June';
  }
  if (month==7) {
    return 'July';
  }
  if (month==8) {
    return 'August';
  }
  if (month==9) {
    return 'September';
  }
  if (month==10) {
    return 'October';
  }
  if (month==11) {
    return 'November';
  }
  if (month==12) {
    return 'December';
  }
  else{
    return '啥也不是';
  }

}
console.log(month_num_to_english)

export default App
