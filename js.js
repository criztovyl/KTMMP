var box1, box2, box3, box4, box5, box6, box7, box8, box_start;
var boxManager = new BoxManager();
function init(){
    $("#loading").remove();
    /*$(function() {
        $(window).resize(function() {
            if ($(".box").length > 0)
                $('.box').height($(window).height() - $('.box').offset().top - ($('.box').outerHeight(true) - $('.box').height()));
            //if ($('.subbox').length > 0)
              //  $('').css();
        });
        $(window).resize();
    });*/

    box1 = new Box('1', 'Box 1', "This is Box 1:)");
    box2 = new Box("2", "Box 2");
    box3 = new Box("3", "Box 3");
    box4 = new Box("4", "Box 4");
    box5 = new Box('5', 'Box 5');
    box6 = new Box("6", "Box 6");
    box7 = new Box("7", "Box 7");
    box8 = new Box("8", "Box 8");
    box_start = new Box("_start", "Start Box");

    box1.setNeighbours({"left": box8, "right": box2, "down": box_start});
    box2.setNeighbours({"right": box3, "down": box_start, "left": box1});
    box3.setNeighbours({"up": box2, "down": box4, "left": box_start});
    box4.setNeighbours({"up": box_start, "right": box3, "left": box1});
    box5.setNeighbours({"up": box_start, "right": box3, "left": box1});
    box6.setNeighbours({"up": box_start, "right": box3, "left": box1});
    box7.setNeighbours({"up": box_start, "right": box3, "left": box1});
    box8.setNeighbours({"up": box_start, "right": box3, "left": box1});
    box_start.setNeighbours({"down": box4, "right": box3, "up": box2, "left": box1});

    box1.print();
    box2.print();
    box3.print();
    box4.print();
    box5.print();
    box6.print();
    box7.print();
    box8.print();
    box_start.print(true);
    box_start.printContent();
}
