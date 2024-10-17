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
  return  <div>
    <div>
      <span style={{ fontSize: '32px' }}>年份</span>
    </div>

    <div>
      <span style={{ fontSize: '32px' }}>月份</span>
    </div>

    <div style={{ fontSize: '32px' }}>
      <span>当月有：</span>
      <span>0</span>
      <span>天</span>
    </div>
  </div>;
}
