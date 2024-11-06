// 验证质数
// 质数是只能被1和自身整除的数字
// 挑战，如果某一个数不是质数的话，显示原因，如果是质数的话不需要显示原因

export default
  function Nums() {
  const num = 10;
  return <div style={{ fontSize: '32px' }}>
    <span>{num}{Verify(num)} </span>
  </div>;

  function Verify(num: number) {
    if (num > 1) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return <span>不是质数, 原因是它能被{i}整除</span>
        }
      }
      return '是质数'

    }
    else {
      return '不是质数, 原因是小于等于1'
    }


  }

  }
