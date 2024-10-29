// 寻找一个数组里面最大的数字和最小的数字，显示到界面上
// 不能使用Math.max或者Math.min

export default
function Nums() {
  // 这里随机生成一个数组，不要动，不要管
  const numList = Array(20).fill(0).map(() => Math.floor(Math.random() * 100));

  return <div style={{ fontSize: '32px' }}>
    <div>{numList.join(',')}</div>
    <div>最大的数字是{contrast(numList)} </div>
    <div>最小的数字是 {contrastmin(numList)}</div>
  </div>;
}
function contrast(numList: number[]){
let nummax = -1 ;
for (let i = 0; i<numList.length;i++){
  if(numList[i]>nummax){
    nummax = numList[i];
  } 
}
return nummax;
}
function contrastmin(numList: number[]){
  let nummin = 100;
  for (let i = 0; i<numList.length;i++){
    if(numList[i]<nummin){
      nummin = numList[i];
    } 
  }
  return nummin;
}