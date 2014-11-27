function style(){
    var current = "#box" + boxManager.getCurrent();
    var height = $(window).height();

    $.each(["left", "right"], function(index, obj){
    $(current + " ." + obj + " .subbox div").css("margin-top", height/2 /*- $(current + " ." + obj + " .subbox div").width()/2*/);
    });
    console.log(height, $(current + ' .vertical .down.subbox div').height());
    $(current + " .vertical .up.subbox").css("height", height - $(current + " .vertical .down.subbox div").height());
}
$(function() {
    $(window).resize(function() {
        style();
    });
    $(window).resize();
});
