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
    initialize:function(){
        console.log('init')
    },
    minus:function(a,b){
        return a-b;
    }
});

