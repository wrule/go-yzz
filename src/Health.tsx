import { useState } from 'react';
// 如果高压大于120，显示血压太高啦，如果低于90，显示血压太低啦，如果在两者之间，显示正常

export default function() {
  const [a, setA] = useState<number>(160);
  const [b, setB] = useState<number>(7)
  const [c, setC] = useState<number>(1)
  const colorResult = result(a,b,c)

  return <div>
    <div style={{ fontSize: '32px' }}>血压</div>
    <div>
      <input
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
        type="number"
        placeholder="请输入你的血压"
        style={{ fontSize: '32px' }}
      />
    </div>
    <div>
      <span style={{ fontSize: '32px' }}>{compare(a)}</span>
    </div>
    <div style={{ fontSize: '32px' }}>血糖</div>
    <div>
    <input
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
        type="number"
        placeholder="请输入你的餐后血糖"
        style={{ fontSize: '32px' }}
      />
    </div>
    <div>
    <span style={{ fontSize: '32px' }}>{Glucose(b)}</span>
    </div>
    <div style={{ fontSize: '32px' }}>血脂</div>
    <div>
      <input
        value={c}
        onChange={(e) => setC(Number(e.target.value))}
        type="number"
        placeholder="请输入你的血脂"
        style={{ fontSize: '32px' }}
      />
    </div>
    <div>
      <span style={{ fontSize: '32px' }}>{blood_fat(c)}</span>
    </div>
    <div style={{ color: colorResult == '健康' ? 'green' : 'red', fontSize: '32px' }}> {result(a,b,c)}</div>
  </div>;
}

function compare(a:number){
  if(a>120 ){
    return '血压太高啦'
  }
  if (a < 90){
    return '血压太低啦'
  }
  else{
    return '血压正常'
  }

}
function Glucose(b:number){
  if(b>7.8 ){
    return '血糖太高啦'
  }
  if (b < 3.9){
    return '血糖太低啦'
  }
  else{
    return '血糖正常'
  }
}
function blood_fat(c:number){
  if(c >2.07 ){
    return '血脂太高啦'
  }
  if (c < 1.03){
    return '血脂太低啦'
  }
  else{
    return '血脂正常'
  }
}

function result(a:number,b:number,c:number){
 
  const resultNum1 = compare(a);
  const resultNum2 = Glucose(b);
  const resultNum3 = blood_fat(c);
  let count = 0
  if (resultNum1 == '血压太高啦'){
    count = count + 1
  }
  if (resultNum2 == '血糖太高啦'){
    count = count +1
  }
  if (resultNum3 == '血脂太高啦'){
    count = count +1
  }
  if (count == 3){
    return '三高'
  }
  if (count == 2){
    return '二高'
  }
  if (count == 1){
    return '一高'
  }
  else{
    return '健康'
  }
}
