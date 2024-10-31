// 在一个数组里面寻找三个数，要求三个数的和等于21
// 挑战，显示排除这三个数字的数组其他的所有数字相加之和

export default
function Nums() {
  // 这里随机生成一个数组，不要动，不要管
  const numList = [2, 7, 10.5, 9, 11, 1, 0.111, -10, 7.98, 99];

  return <div style={{ fontSize: '32px' }}>
    <div>{numList.join(',')}</div>
    <div>和为21的三个数字是 xx xx xx</div>
    <div>和为21的三个数字是 xx（位于xx） xx（位于xx）xx（位于xx）</div>
    <div>其他所有数字的相加和是 xx</div>
  </div>;
}
