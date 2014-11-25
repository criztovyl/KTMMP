var boxManager; 
function init(){
    boxManager = new BoxManager([
            [0, "tcpip",  1,       2],
            ["http", "technik", "start", 3],
            [0, "browser",        5,       4]
            ]);

    boxManager.add(1, new Box('1', 'Box 1', "This is Box 1:)"));
    boxManager.add(2, new Box('2', 'Box 2', "This is Box 2:)"));
    boxManager.add(3, new Box('3', 'Box 3', "This is Box 3:)"));
    boxManager.add(4, new Box('4', 'Box 4', "This is Box 4:)"));
    boxManager.add(5, new Box('5', 'Box 5', "This is Box 5:)"));
    boxManager.add(6, new Box('6', 'Box 6', "This is Box 6:)"));
    boxManager.add("technik", new Box('technik', 'Technik', "technik.html", true));
    boxManager.add("http", new Box('http', 'HTTP', 'http.html', true));
    boxManager.add("tcpip", new Box('tcpip', 'TCP/IP', 'tcpip.html', true));
    boxManager.add("browser", new Box('browser', 'Webbrowser', 'browser.html', true));
    boxManager.add("start", new Box('start', 'Start', "startbox.html", true), true);

    boxManager.print();
    style();
    hashchange();
    $("#loading").remove();
    
    window.onhashchange = hashchange;
}
function hashchange(){
    split = document.URL.split("#");
    if(split.length == 2 && boxManager.current != split[1]){
        boxManager.change("box" + split[1], "up", true);
    }
}
