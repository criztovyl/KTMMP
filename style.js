function style(){
    var current = ".box#" + boxManager.getCurrent()
    var hw = $(window).height();

    console.log("Styling " + current);

    $.each(["left", "right"], function(index, obj){

        //Check if has left/right neighbour
        if(boxManager.neighbours(boxManager.getCurrent())[obj] != undefined){
            
            //Selector horizontal (right o. left)
            var sh = current + " ." + obj + " .subbox div"
            $(sh).css("margin-top", hw/2);
            console.log(_spf("Resized %s height to %s px", obj, $(sh).height()));
        }
        else{
            console.log(_spf("Neighbour %s is not set", obj));
        }
    });
    
    //Selector vertical subbox
    var svs = current + " .vertical .subbox";
    
    //Selector subbox up, div, height
    var ssu = svs + ".up";
    var sdu = ssu + " div";
    var hsu = $(ssu).height();
    var hdu = $(sdu).height();
    hdu = hdu == null ? 0: hdu;
    
    //Selector subbox down, div, height
    var ssd = svs + ".down";
    var sdd = ssd + " div";
    var hsd = $(ssd).height();
    var hdd = $(sdd).height();
    hdd = hdd == null ? 0 : hdd;

    //Selector content, height
    var sc = current + " .vertical .content";
    var hc = $(sc).height();
    var hcD = $(sc).outerHeight() - hc;
    var hcS = hw - hdd - hdu - hcD;

    console.log(_spf("Resizing up to %3$spx, down to %2$spx and content from %6$s to %4$spx height (%5$spx difference) @ %1$spx window height", hw, hdd, hdu, hcS, hcD, hc));
    console.log(sdd);

    $(ssu).css("height", hdu);
    $(ssd).css("height", hdd);
    $(sc) .css("height", hcS);
    
    //console.log("Resized (content, down, up, height)", hc, hsd, hsu, hw);
}
$(function() {
    $(window).resize(function() {
        style();
    });
    $(window).resize();
});
