$(function(){
    $("nav li").eq(1).mouseover(function(){
        $("#nav_show_div1").stop().show();
    })
    $("nav li").eq(1).mouseout(function () {
        $("#nav_show_div1").stop().hide();
    })
    /*course_li*/
    $("nav li").eq(2).mouseover(function(){
        $("#nav_show_div2").stop().show();
    })
    $("nav li").eq(2).mouseout(function () {
        $("#nav_show_div2").stop().hide();
    })
    /*community_li*/
    $("nav li").eq(3).mouseover(function(){
        $("#nav_show_div3").stop().show();
    })
    $("nav li").eq(3).mouseout(function () {
        $("#nav_show_div3").stop().hide();
    })
    /*occupation_li*/
    $("nav li").eq(4).mouseover(function(){
        $("#nav_show_div4").stop().show();
    })
    $("nav li").eq(4).mouseout(function () {
        $("#nav_show_div4").stop().hide();
    })
})