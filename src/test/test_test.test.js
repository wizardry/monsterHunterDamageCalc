var should = require('should');
var math = require('../js/test_test');

describe('math',function(){
    it('正常系：足し算 1+1=2',function(){
        math.addition(1,1).should.equal(2);
    });
    it('正常系：掛け算 2*5=10',function(){
        math.multiplication(2,5).should.equal(10);
    });
    it('正常系：最大値取得 2,5 = 5',function(){
        math.max(2,5).should.equal(5);
    });
});