// 在一个数组里面寻找三个数，要求三个数的和等于21
// 如果没有的话 返回空数组
// 如果有的话 请返回

export default
function Nums() {
  // 这里随机生成一个数组，不要动，不要管
  const numList = [2, 10.5, 3, 9, 11, 1, 0.111, -10, 7.98, 99];

  return <div style={{ fontSize: '32px' }}>
    <div>{numList.join(',')}</div>
    <div>和为21的三个数字是 xx xx xx</div>
    <div>和为21的三个数字是 xx（位于xx） xx（位于xx）xx（位于xx）</div>
  </div>;
}
