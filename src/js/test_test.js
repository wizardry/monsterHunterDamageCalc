// var jquery = require('./lib/jquery.min.js');
// var cookie = require('./lib/jquery.cookie.js');
import _ = require('./lib/underscore-min.js');
import backbone = require('./lib/backbone.js');
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
module.exports = math;
