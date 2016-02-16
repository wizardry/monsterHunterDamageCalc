$(function(){
    function navBehovior(){
        var wrap = $('.globalNavigationWrap');
        
        function navToggle(){
            $('.sys-navToggle').click(function(){
                if(wrap.hasClass('close')){
                    wrap.removeClass('close')
                    $('.mainContentsWrap').removeClass('menuClose')

                }else{
                    wrap.addClass('close')
                    $('.mainContentsWrap').addClass('menuClose')
                }
            })
        }

        var pos = $(window).scrollTop();
        var hh = $('.globalHeader').outerHeight();
        console.log(pos)

        function navPosition(){
            navPositionFunc()
            $(window).scroll(function(){
                pos = $(window).scrollTop();
                navPositionFunc()
            })

        }
        function navPositionFunc(){
            if(pos > hh && !wrap.hasClass('fixed')){
                wrap.addClass('fixed')
            }else if(pos < hh && wrap.hasClass('fixed')){
                wrap.removeClass('fixed')
            }
        }

        navToggle();
        navPosition();
    }
    navBehovior()
})