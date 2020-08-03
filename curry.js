// 问题2：
// a(1)=>1
// a(1)(2)=>1+2=3
// a(1)(2)(3)=>6
// 原型链的问题--柯理化
// a(1)()()=>1
// a(1)(2)()=>1+2=3
// a(1)(2)(3)=>6
function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = [].slice.call(arguments);
  console.log('_args===', _args)
  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var adder = function () {
    var _adder = function () {
      // [].push.apply(_args, [].slice.call(arguments));
      _args.push(...arguments);
      return _adder;
    };
    // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function () {
      return _args.reduce(function (a, b) {
        return a + b;
      });
    }

    return _adder;
  }
  // return adder.apply(null, _args);
  return adder(..._args);
}

console.log(add(1)(2)(4))