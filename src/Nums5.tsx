// 验证质数
// 质数是只能被1和自身整除的数字
// 挑战，如果某一个数不是质数的话，显示原因，如果是质数的话不需要显示原因

export default
function Nums() {
  const num = 4;

  return <div style={{ fontSize: '32px' }}>
    <span>{num} 不是质数 原因是 它能被 2 整除</span>
  </div>;
}
