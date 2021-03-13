// function fib (num){
//   let result= 0
//   let track = 0
//   for (let i = 1; i<= num; i++){
//     track = 
//     result = i 
//   }
  

//   return result
// }


function fib (num){
  let track = 1
  let val = 1
  let total;
  if (num === 1) {
    return 0;
  }

  if (num === 2 || num === 3){
    return 1;
  }

  //return fib(num - 1) + fib(num - 2);
  for (let i = 4; i <= num; i++ ){
    total = track + val
    track = total
    if ( track > 2) {
      val = track - val
    }
  }

  return total
}




var myMaze = [
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],

];

// function findPath() {
//   let answer = []
//   let jump = false

//   for (let i = 0; i< myMaze.length; i++){
//     if (jump === true){
//       continue
//     }
//     for (let j = 0; j < myMaze[0].length  ; j++){
//       if (myMaze[i][j] === 1 && myMaze[i + 1][j] === 1){
//         if (myMaze[j] === 6)
//         jump = true
//         }

//         answer.push(i)
//         answer.push(j)
//       } 


     
//     }
//     return answer
//   }
  
