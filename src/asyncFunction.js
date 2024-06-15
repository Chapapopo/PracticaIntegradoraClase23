// src/asyncFunction.js
function asyncFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('result'), 1000);
    });
  }
  
  module.exports = asyncFunction;
  