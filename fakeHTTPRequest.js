const fakeHTTPRequest = (() => {
  let i = 0;
  return () => {
    i += 1
    console.log(`it will response in ${3 - i % 4}s`)
    const value = `It's the ${i}th result`
    return new Promise((r) => {
      setTimeout(() => r(value), (3 - i % 4) * 1000)
    })
  }
})();

var count = 0
const handleRequest = async () => {
  let id = ++count;
  return new Promise((r) => {
    fakeHTTPRequest().then(res => {
      if (id == count) {
        r(res)
      }
    })
  })
}


(async () => {
  console.log(await handleRequest())
})();
(async () => {
  console.log(await handleRequest())
})();
(async () => {
  console.log(await handleRequest())
})();