var boxManager; 
function init(){
    boxManager = new BoxManager([
            [0        , "tcp"       , 0      , 0],
            ["http"   , "inetprotos", "ip"   , 0],
            ["html"   , "protos"    , 0      , "arpa"],
            ["browser", "tech"      , "start", "hist"],
            [0        , "osi"       , "heutemorgen", 0]
            ]);

    /*boxManager.add(1, new Box('1', 'Box 1', "This is Box 1:)"));
    boxManager.add(2, new Box('2', 'Box 2', "This is Box 2:)"));
    boxManager.add(3, new Box('3', 'Box 3', "This is Box 3:)"));
    boxManager.add(4, new Box('4', 'Box 4', "This is Box 4:)"));
    boxManager.add(5, new Box('5', 'Box 5', "This is Box 5:)"));
    boxManager.add(6, new Box('6', 'Box 6', "This is Box 6:)"));*/
    boxManager.add("tech", new Box('tech', 'Technik', "tech.html", true));
    boxManager.add("http", new Box('http', 'HTTP', 'http.html', true));
    boxManager.add("inetprotos", new Box('inetprotos', 'Die Internetprotokollfamilie', 'internetprotocolfamily.html', true));
    boxManager.add("browser", new Box('browser', 'Webbrowser', 'browser.html', true));
    boxManager.add("start", new Box('start', 'Start', "startbox.html", true), true);
    boxManager.add("tls", new Box('tls', 'TLS', "tls.html", true));
    boxManager.add("tcp", new Box('tcp', "TCP", "tcp.html", true));
    boxManager.add("ip", new Box("ip", "IP", "ip.html", true));
    boxManager.add("osi", new Box("osi", "OSI Modell", "osi.html", true));
    boxManager.add("protos", new Box("protos", "Protokolle", "protos.html", true));
    boxManager.add("html", new Box("html", "HTML", "html.html", true));
    boxManager.add("hist", new Box("hist", "Geschichte", "hist.html", true));
    boxManager.add("arpa", new Box("arpa", "ARPANET", "arpa.html", true));
    boxManager.add("heutemorgen", new Box("heutemorgen", "Heute &amp; Morgen", "heutemorgen.html", true));

    boxManager.print();
//    style();
    hashchange();
    $("#loading").remove();
    
    window.onhashchange = hashchange;
}
function hashchange(){
    split = document.URL.split("#");
    if(split.length == 2 && boxManager.getCurrent() != split[1]){
        boxManager.change(split[1], "", true);
    }
}
