import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Health from './Health'

function App() {
  return <Health />;
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
      <h1>闫贞贞 + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR1 <br />
          1月是{season(1)}，英文是{month_season(1)}, 月份是{month_num_to_english(1)},有{day(1)}天<br />
          2月是{season(2)}，英文是{month_season(2)}, 月份是{month_num_to_english(2)},有{day(2)}天<br />
          3月是{season(3)}，英文是{month_season(3)}, 月份是{month_num_to_english(3)},有{day(3)}天<br />
          4月是{season(4)}，英文是{month_season(4)}, 月份是{month_num_to_english(4)},有{day(4)}天<br />
          5月是{season(5)}，英文是{month_season(5)}, 月份是{month_num_to_english(5)},有{day(5)}天<br />
          6月是{season(6)}，英文是{month_season(6)}, 月份是{month_num_to_english(6)},有{day(6)}天<br />
          7月是{season(7)}，英文是{month_season(7)}, 月份是{month_num_to_english(7)},有{day(7)}天<br />
          8月是{season(8)}，英文是{month_season(8)}, 月份是{month_num_to_english(8)},有{day(8)}天<br />
          9月是{season(9)}，英文是{month_season(9)}, 月份是{month_num_to_english(9)},有{day(9)}天<br />
          10月是{season(10)}，英文是{month_season(10)}, 月份是{month_num_to_english(10)},有{day(10)}天<br />
          11月是{season(11)}，英文是{month_season(11)}, 月份是{month_num_to_english(11)},有{day(11)}天<br />
          12月是{season(12)}，英文是{month_season(12)}, 月份是{month_num_to_english(12)},有{day(12)}天<br />
        </p >
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p >
    </>
  )
}
function month_season(month:number){
  
  if (month==1) {
    return 'spring';
  }
  if (month==2) {
    return 'spring';
  }
  if (month==3) {
    return 'spring';
  }
  if (month==4) {
    return 'sunmmer';
  }
  if (month==5) {
    return 'sunmmer';
  }
  if (month==6) {
    return 'sunmmer';
  }
  if (month==7) {
    return 'autumn';
  }
  if (month==8) {
    return 'autumn';
  }
  if (month==9) {
    return 'autumn';
  }
  if (month==10) {
    return 'winter';
  }
  if (month==11) {
    return 'winter';
  }
  if (month==12) {
    return 'winter';
  }
  else{
    return '啥也不是';
  }

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
function season(month:number){
  
  if (month==1) {
    return '春';
  }
  if (month==2) {
    return '春';
  }
  if (month==3) {
    return '春';
  }
  if (month==4) {
    return '夏';
  }
  if (month==5) {
    return '夏';
  }
  if (month==6) {
    return '夏';
  }
  if (month==7) {
    return '秋';
  }
  if (month==8) {
    return '秋';
  }
  if (month==9) {
    return '秋';
  }
  if (month==10) {
    return '冬';
  }
  if (month==11) {
    return '冬';
  }
  if (month==12) {
    return '冬';
  }
  else{
    return '啥也不是';
  }
}
function day(month:number){
  if (month==2){
    return '28,闰年29' ;
  }
  if (month==8){
    return 31 ;
  }
  if (month==9){
    return 30 ;
  }
  if (month==10){
    return 31 ;
  }
  if (month==11){
    return 30 ;
  }
  if (month==12){
    return 31 ;
  }
  if (month%2){
    return '31' ;
  }
  else{
    return '30' ;
  }

}

export default App
