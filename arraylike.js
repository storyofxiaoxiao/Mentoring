// a(1,2,3,4)，不解构，b接收后三个参数  b(2,3,4)后三位--arguements

// a(1,2,3,4){

//     b(2,3,4)
// }
function b(params) {
  console.log('b - params =', params)
}

function a(params) {
  let arg = [].slice.call(arguments).slice(-3)
  b(arg)
}
a(1, 2, 3, 4)