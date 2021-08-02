/**
 * 随机数
 */
 const random = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
  }
  /**
 * Generator 函数
 */
const gen = function* gen(x){
    try {
      var y = yield x + 2;
      return y
    } catch (e){
      console.log(e);
    }
    return y;
  }
  export {
    random,
    gen
  }