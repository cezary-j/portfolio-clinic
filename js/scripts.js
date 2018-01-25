//  ADD CLASSESS //

$(function(){
    $("#box-1").click(function(){
        $("#box-3").removeClass("box-active");
        $("#box-2").removeClass("box-active");
        $("#box-1").addClass("box-active");
    });

    $("#box-2").click(function(){
        $("#box-1").removeClass("box-active");
        $("#box-3").removeClass("box-active");
        $("#box-2").addClass("box-active");
});

    $("#box-3").click(function(){
        $("#box-2").removeClass("box-active");
        $("#box-1").removeClass("box-active");
        $("#box-3").addClass("box-active");

});
});

//  replace icon image  //

$(document).ready(function(){
    $("#box-1").click(function(){
        $("#icon-1").attr("src","img/plastic-icon2.svg");
    })
});

$(document).ready(function(){
    $("#box-2").click(function(){
        $("#icon-2").attr("src","img/hair-icon2.svg");
    })
});
$(document).ready(function(){
    $("#box-3").click(function(){
        $("#icon-3").attr("src","img/relax-icon2.svg")

    })
});

