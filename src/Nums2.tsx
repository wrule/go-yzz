// 在一个数组里面寻找两个数，要求这两个数相加之和等于7
// 挑战：在一个数组里面寻找两个数，要求这两个数相加之和等于7,显示这两个数字，并且显示这两个数在数组之中的位置

export default
function Nums() {
  // 这里随机生成一个数组，不要动，不要管
  const numList = [1, 9, 20, 5, 0, 6, 13, 7, 21, 8];

  return <div style={{ fontSize: '32px' }}>
    <div>{numList.join(',')}</div>
    <div>和为7的两个数字是 xx xx</div>
    <div>和为7的两个数字是 xx（位于xx） xx（位于xx）</div>
  </div>;
}
