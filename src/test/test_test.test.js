/**
* Nodeでも走るようにする
*
*/
if(typeof exports !== 'undefined'){
    var math = require('../js/test_test.js');
    var util = require("util");
    var QUnit = require('qunitjs');
    var qunitTap = require('qunit-tap');
    // console.log(qunitTap)
    // qunitTap = qunitTap.qunitTap
    QUnit.load();
    QUnit.config.updateRate = 0;
    qunitTap = qunitTap(QUnit,console.log)
    exports.assert = QUnit;
    QUnit.jUnitReport = function(report) {
        console.log(report.xml);
    };
    // File lead and vars
    console.log('nodejs');
}


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
})

if(typeof exports !== 'undefined'){
}
