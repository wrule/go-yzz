// 寻找一个数组里面最大的数字和最小的数字，显示到界面上
// 并且显示那个数字的位于数组的第几个项目
// 不能使用Math.max或者Math.min

// 挑战：显示数组的平均数

export default
function Nums() {
  // 这里随机生成一个数组，不要动，不要管
  const numList = Array(20).fill(0).map(() => Math.floor(Math.random() * 100));

  return <div style={{ fontSize: '32px' }}>
    <div>{numList.join(',')}</div>
    <div>最大的数字是 xx 位于第 xx 个位置</div>
    <div>最小的数字是 xx 位于第 xx 个位置</div>
    <div>挑战：数组的平均数是 xx</div>
  </div>;
}
