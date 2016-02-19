if (typeof exports !== "undefined") {
    var $ = require('../js/lib/jquery.min');
    var _ = require('../js/lib/underscore-min');
    var Backbone = require('../js/lib/backbone.js');
}


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
var Calc = Backbone.Model.extend({
    initialize:function(){console.log('init')},
});

if (typeof exports !== "undefined") {
    module.exports = math;
}