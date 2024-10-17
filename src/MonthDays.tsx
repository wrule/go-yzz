// 月份计算器
// 用户输入 年份 和 月份，自动计算出此年份的月份一共有多少天
// 比如 2008 年的 2 月 有 29天（闰年）
// 比如 2001 年的 2 月 有 28天
// 比如 2011 年的 4 月 有 30天
// 公历闰年的规则：公历闰年是指可以被4整除的年份，但是不能被100整除，或者可以被400整除的年份。
// 换句话说，公历闰年是能够被4整除但不能被100整除的年份，或者能够被400整除的年份。
// 请你仿造之前的代码，编写月份计算器的逻辑和界面
import { useState } from 'react';

export default function() {
  const [years , setYears] = useState<number>(2000)
  const [month , setMonth] = useState<number>(1)
  return  <div>
    <div style={{ fontSize: '32px' }}>请输入年份</div>
  <div>
    <input
      value={years}
      onChange={(e) => setYears(Number(e.target.value))}
      type="number"
      placeholder="请输入年份"
      style={{ fontSize: '32px' }}
    />
  </div>
  <div style={{ fontSize: '32px' }}>请输入月份</div>
  <div>
    <input
      value={month}
      onChange={(e) => setMonth(Number(e.target.value))}
      type="number"
      placeholder="请输入月份"
      style={{ fontSize: '32px' }}
    />
  </div>
    <div style={{ fontSize: '32px' }}>
      <span>当月有：</span>
      <span>{checkYears(years,month)}</span>
      <span>天</span>
    </div>
  </div>;
}
// 处理闰年
function checkYears(years : number,month :number){
  if (month==1 || month== 3|| month==5|| month==7|| month==8|| month==10|| month==12) {
    return '31';
  }
  if (month==4 || month== 6|| month==11) {
    return '30';
  }
  if (years % 4 && years % 100 != 0 && month == 2){
    return '28';
  }
  else{
    return '29';
  }
}
