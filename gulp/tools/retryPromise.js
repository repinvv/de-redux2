function retryPromise(func, retryCount = 5) {
  return async function () {
    let count = retryCount;
    let error;
    while (count) {
      try {
        const result = await func.apply(null, arguments);
        return result;
      } catch (err) {
        count--;
        error = err;
      }
    }
    throw error;
  }
}

module.exports = retryPromise;
