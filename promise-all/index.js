const PromiseAll = (promisesArray) => {
  return new Promise((resolve, reject) => {
    const resultArr = [];

    for(const currentPromise of promisesArray) {
      currentPromise.then((result) => {
        resultArr.push(result);

        if(resultArr.length === promisesArray.length) {
          resolve(resultArr);
        }
      }).catch((err) => {
        reject(err);
      })
    }
  })
}
