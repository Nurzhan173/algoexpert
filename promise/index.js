function noob() {

}

class MyPromise {
  constructor(executor) {
    this.queue = [];
    this.errorHandler = noob;
    this.finallyHandler = noob;

    try {
      executor.call(null, this.onResolve.bind(this), this.onReject.bind(this))
    } catch(e) {
      this.errorHandler(e)
    } finally {
      this.finallyHandler()
    }
  }

  onResolve(data) {
    this.queue.forEach(callback => {
      data = callback(data);
    })

    this.finallyHandler()
  }

  onReject(error) {
    this.errorHandler(error)
    this.finallyHandler()
  }

  then(fn) {
    this.queue.push(fn);
    return this;
  }

  catch(fn) {
    this.errorHandler = fn;
    return this;
  }

  finally(fn) {
    this.finallyHandler(fn);
    return this;
  }
}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('AAA');
    // reject('SOME')
  }, 2000)
})


promise.then(res => res.toUpperCase()).finally(() => {
  console.log('ASDASD')
})

module.exports = MyPromise
