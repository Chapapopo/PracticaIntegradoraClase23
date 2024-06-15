import mongoose from 'mongoose';
import User from '../src/model/user.model';
import assert from 'assert';
import asyncFunction from '../src/asyncFunction';
import chai from 'chai';
import "../src/utilities/connection.js";
const expect = chai.expect;

mongoose.connect

describe("testing Users Dao", ()=>{
  before(function () {
    this.userDao = new User()
  })
  beforeEach(function(){
    this.timeout(5000)
  })
})

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });
});

describe('asyncFunction', function() {
  it('should return result after 1 second', async function() {
    const result = await asyncFunction();
    assert.strictEqual(result, 'result');
  });
});


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});
