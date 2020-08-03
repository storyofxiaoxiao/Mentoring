// const一个对象 无法改变内容

Object.defineProperty(myObject, "a", { // 获得属性 Object.getOwnPropertyDescriptor( myObject, "a" );
  value: 2,
  writable: false, // 不可写！
  enumerable: true, // enumerable控制属性是否会出现在对象的属性枚举中，比如说for…in循环
  configurable: false // configurable: false还会禁止删除这个属性
});

myObject.a = 3;
myObject.a; // 2