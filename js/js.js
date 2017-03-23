/**
 * Created by Administrator on 2016/10/30.
 */
$(function(){
    // 顶部菜单效果
    $(".top-bg .inner .top-right li.has-hide").hover(function(){
        $(this).addClass("cur");
        $(this).find(".menu-a").addClass("cur");
        $(this).find(".hide-box").show();
    },function(){
        $(this).removeClass("cur");
        $(this).find(".menu-a").removeClass("cur");
        $(this).find(".hide-box").hide();
    })


    // 凡客诚品和v+商城点击切换效果
    $(".main .logo-box ul.on-search li").on("click",function(){
        $(this).removeClass("no-bg").siblings().addClass("no-bg");
    })

    //购物车上的效果
    $(".main .logo-box .car-shop").hover(function(){
        $(this).addClass('cur');
        $(this).find(".hide-box").show();
    },function(){
        $(this).removeClass('cur');
        $(this).find(".hide-box").hide();
    })

    //凡客旗下的效果
    $('.main .logo-box .fankeqixia-box .fankeqixia').hover(function(){
        $(this).addClass('cur');
        $(this).siblings('.hide-box').show(400);
    },function(){
        $(this).removeClass('cur');
        $(this).siblings('.hide-box').hide();
    });
    $('.m2 .hide-box').hover(function(){
        $(this).siblings('.fankeqixia').addClass('cur');
        $(this).show(300);
    },function(){
        $(this).siblings('.fankeqixia').removeClass('cur');
        $(this).hide();
    });

    //灰色导航条的效果
    $(".main .nav-gray .nav-left .list-menu").hover(function(){
        $(this).find('.list-a').addClass('cur');
        $(this).find('.hide-box').show(200);
    },function(){
        $(this).find('.list-a').removeClass('cur');
        $(this).find('.hide-box').hide();
    });


    //$(".main .nav-gray .nav-left .list-menu").mouseenter(function(){
    //    $(this).find('.list-a').addClass('cur');
    //    $(this).find('.hide-box').show(500);
    //});
    //$(".main .nav-gray .nav-left .list-menu").mouseleave(function(){
    //    $(this).find('.list-a').removeClass('cur');
    //    $(this).find('.hide-box').hide();
    //});




    //轮播图效果
    var flash_sta = 0;
    var timer = setInterval(autoPlay,2500);
    function autoPlay(){
        flash_sta++;
        flash_sta = (flash_sta == 7)? 0 : flash_sta;
        $('.carousel-ad img').eq(flash_sta).fadeIn().siblings('img').hide();
        $('.carousel-ad ul li').eq(flash_sta).addClass('cur').siblings('li').removeClass('cur');
    }


    $('.main .flash-box .carousel-ad ul li').hover(function(){
        clearInterval(timer);          //鼠标放到小按钮上，清除定时器
        flash_sta = $(this).index();        //获得按下的索引号
        //使按下的图片显示出来，其他的图片消失
        $('.carousel-ad img').eq(flash_sta).fadeIn().siblings('img').hide();
        //给按下的按钮加cur类，其他的按钮类移除
        $('.carousel-ad ul li').eq(flash_sta).addClass('cur').siblings('li').removeClass('cur');
    },function(){
        timer = setInterval(autoPlay,2500);
    })
    //当鼠标放到图片上时，停止轮播，清除定时器
    $('.carousel-ad img').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(autoPlay,2500);
    })

    //无缝轮播区域
    var ul_width = 0;
    $('.wufeng .wufeng-text .text-menu1 li').each(function(){
        ul_width = ul_width + $(this).width();  //获得ul的宽度
        //console.log($(this).width());
    });
    $('.wufeng .wufeng-text ul').css('width',ul_width + "px"); //将ul的宽度赋值给ul
    //将第二个ul放在第一个ul后面
    $('.wufeng .wufeng-text .text-menu2').css('left',ul_width + "px");


    //将前一个ul换到后一个ul的时机
    var chang_width = $('.wufeng .wufeng-text').width() - 2*ul_width;
    function wufeng(obj){
        setInterval(function(){
            var old_left = obj.position().left;  //获得ul距左的距离
            var new_left = old_left - 1;
            if(new_left < chang_width)
            {
                obj.css('left','710px');
                new_left = 710;
            }
            obj.css('left',new_left + "px");
        },20)
    }
    wufeng($('.wufeng .wufeng-text .text-menu1'));
    wufeng($('.wufeng .wufeng-text .text-menu2'));

    //商品分类区块的效果
    $('.main .fenlei-box .fenlei-list .list-box').hover(function(){
        $(this).find('.left').addClass('l-cur');
        $(this).find('.right').addClass('r-cur');
    },function(){
        $(this).find('.left').removeClass('l-cur');
        $(this).find('.right').removeClass('r-cur');
    })




    ////tab栏切换效果
    $('.tab .list-title li').mouseover(function(){
        $(this).addClass('cur').siblings().removeClass('cur');
        var index = $(this).index();
        $('.content .same').eq(index).show().siblings('.same').hide();
    })


});