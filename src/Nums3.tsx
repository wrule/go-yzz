// 在一个数组里面寻找三个数，要求三个数的和等于21
// 挑战，显示排除这三个数字的数组其他的所有数字相加之和

export default
function Nums() {
  // 这里随机生成一个数组，不要动，不要管
  const numList = [2, 7, 10.5, 9, 11, 1, 0.111, -10, 7.98, 99];

  return <div style={{ fontSize: '32px' }}>
    <div>{numList.join(',')}</div>
    <div>和为21的三个数字是 {threesum(numList)[0]} ,{threesum(numList)[1]} , {threesum(numList)[2]} </div>
    <div>和为21的三个数字是 {threesum(numList)[0]}（位于{threeindex(numList)[0]}） {threesum(numList)[1]}（位于{threeindex(numList)[1]}）{threesum(numList)[2]}（位于{threeindex(numList)[2]}）</div>
    <div>其他所有数字的相加和是 {sum(numList)}</div>
  </div>;
}

function threesum(numList:number[]){
  for (let i= 0; i < numList.length-2; i++){
    for(let j= i+1; j <numList.length-1; j++){
      for (let t = j+1; t < numList.length; t++){
        if (numList[i]+numList[j]+numList[t]=== 21){
          return[numList[i],numList[j],numList[t]];
        }
      }
    }
  }
  return[];
}

function threeindex(numList:number[]){
  for (let i= 0; i < numList.length-2; i++){
    for(let j= i+1; j <numList.length-1; j++){
      for (let t = j+1; t < numList.length; t++){
        if (numList[i]+numList[j]+numList[t]=== 21){
          return[i,j,t];
        }
      }
    }
  }
  return[];
}


function sum(numList:number[]){
  let sumnumer = 0;
  for (let i=0;i<numList.length;i++){
    sumnumer= sumnumer + numList[i];

  }
  return sumnumer - 21 ;
}
