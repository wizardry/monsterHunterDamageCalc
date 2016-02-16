var $ = require('./lib/jquery.js')
var math = {
    addition:function(a,b){
        return a+b;
    },
    multiplication:function(a,b){
        return a*b;
    },
    max:function(a,b){
        return Math.max.apply(null,[a,b]);
    }
};
$(function(){
    alert(0);
})
module.exports = math;
