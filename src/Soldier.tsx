import { useState } from 'react';
// 士兵征兵要求四项
// 1.身高 在 [170, 200]
// 2.体重 在 [130, 180]
// 3.视力 在 [1.0, 2.0]
// 4.年龄 在 [18, 35]
// 请你仿造健康计算器实现一个征兵要求计算器

export default function() {
    const [height , setHeight] = useState<number>(170)
    const [weight , setWeight] = useState<number>(130)
    const [sight , setSight] = useState<number>(1.0)
    const [age , setAge] = useState<number>(18)

  return  <div>
  <div style={{ fontSize: '32px' }}>身高</div>
  <div>
    <input
      value={height}
      onChange={(e) => setHeight(Number(e.target.value))}
      type="number"
      placeholder="请输入你的身高"
      style={{ fontSize: '32px' }}
    />
  </div>
  <div>
    <span style={{ fontSize: '32px' }}>{Height(height)}</span>
  </div>
  <div style={{ fontSize: '32px' }}>体重</div>
  <div>
  <input
      value={weight}
      onChange={(e) => setWeight(Number(e.target.value))}
      type="number"
      placeholder="请输入你的体重"
      style={{ fontSize: '32px' }}
    />
  </div>
  <div>
  <span style={{ fontSize: '32px' }}>{Weight(weight)}</span>
  </div>
  <div style={{ fontSize: '32px' }}>视力</div>
  <div>
    <input
      value={sight}
      onChange={(e) => setSight(Number(e.target.value))}
      type="number"
      step="any"
      placeholder="请输入你的视力"
      style={{ fontSize: '32px' }}
    />
  </div>
  <div>
  <span style={{ fontSize: '32px' }}>{Sight(sight)}</span>
  </div>
  <div style={{ fontSize: '32px' }}>年龄</div>
  <div>
    <input
      value={age}
      onChange={(e) => setAge(Number(e.target.value))}
      type="number"
      placeholder="请输入你的体重"
      style={{ fontSize: '32px' }}
    />
  </div>
  <div>
    <span style={{ fontSize: '32px' }}>{Age(age)}</span>
  </div>
  <div style={{ color:'red' , fontSize: '32px' }}>{Result(height, weight, sight, age )}</div>
</div>;
}
// 士兵征兵要求四项
// 1.身高 在 [170, 200]
// 2.体重 在 [130, 180]
// 3.视力 在 [1.0, 2.0]
// 4.年龄 在 [18, 35]
// 请你仿造健康计算器实现一个征兵要求计算器
function Height(height :number)  {
   return height >= 170 && height <= 200  ? '符合': '不符合'
}
function Weight(weight :number){
    return weight >= 130 && weight <= 180 ? '符合': '不符合'
}
function Sight(sight :number){
    return sight >= 1.0 && sight <= 2.0 ? '符合': '不符合'
}
function Age(age :number){
    return age >= 18 && age <= 35 ? '符合': '不符合'
}

function Result(height :number, weight :number, sight :number, age :number){
    const ResultHeight = Height(height);
    const ResultWeight = Weight(weight);
    const ResultSight = Sight(sight);
    const ResultAge = Age(age);
    let count = 0;
    if( ResultHeight == '符合'){
        count++;
    }
    if( ResultWeight == '符合'){
        count++;
    }
    if( ResultSight == '符合'){
        count++;
    }
    if( ResultAge == '符合'){
        count++;
    }
   if (count == 4){
    return '符合' ;
   }else{
    return '不符合'; 
   } 
}
