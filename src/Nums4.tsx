// 在一个数组里面寻找三个数，要求三个数的和大于等于0，小于100，即[0~99)

export default
function Nums() {
  // 这里随机生成一个数组，不要动，不要管
  const numList = [2, 7, 10.5, 9, 11, 1, 0.111, -10, 7.98, 99];
  // 你可以修改这里的值测试，范围是[0~99)
  const target = 90;

  return <div style={{ fontSize: '32px' }}>
    <div>{numList.join(',')}</div>
    <div>和为 xx 的三个数字是 xx xx xx </div>
    <div>和为 xx 的三个数字是 xx位于（xx）xx位于（xx）xx位于（xx）</div>
    <div>其他所有数字的相加和是 xx</div>
  </div>;
}
