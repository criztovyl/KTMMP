var boxManager; 
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
    boxManager = new BoxManager([
            [8, 1, 2],
            [7, "start", 3],
            [6, 5, 4]
            ]);

    boxManager.add(1, new Box('1', 'Box 1', "This is Box 1:)"));
    boxManager.add(2, new Box('2', 'Box 2', "This is Box 2:)"));
    boxManager.add(3, new Box('3', 'Box 3', "This is Box 3:)"));
    boxManager.add(4, new Box('4', 'Box 4', "This is Box 4:)"));
    boxManager.add(5, new Box('5', 'Box 5', "This is Box 5:)"));
    boxManager.add(6, new Box('6', 'Box 6', "This is Box 6:)"));
    boxManager.add(7, new Box('7', 'Box 7', "This is Box 7:)"));
    boxManager.add(8, new Box('8', 'Box 7', "This is Box 8:)"));
    boxManager.add("start", new Box('start', 'Start', "This is the Start Box:)"));

    /*
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
    */
}
