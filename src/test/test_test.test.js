/**
* mocha style test
*

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
*/
QUnit.module("math",{
    setup:function(){},
    teardown:function(){},
})
QUnit.test("math TEST",function(){
    var mathTest = math;
    QUnit.assert.deepEqual(mathTest.addition(1,1),2,'足し算 1+1=2');
    QUnit.assert.deepEqual(mathTest.multiplication(2,5),10,'掛け算 2*5=10');
    QUnit.assert.deepEqual(mathTest.max(1,10),10,'最大値取得');
});
QUnit.module("BackboneModel - CALC",{
    setup:function(){},
    teardown:function(){},
})
QUnit.test("calc TEST",function(){
    var calc = new Calc();
    QUnit.assert.deepEqual(calc.minus(1,1),0,'引き算 1-1=0');
});
