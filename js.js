var boxManager; 
function init(){
    boxManager = new BoxManager([
            [0        , "tcp"       , 0      , 0],
            ["http"   , "inetprotos", "ip"   , 0],
            ["html"   , "protos"    , 0      , "arpa"],
            ["browser", "tech"      , "start", "hist"],
            [0        , "osi"       , "heutemorgen", 0]
            ]);

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
//    boxManager.add("hist", new Box("hist", "Geschichte", "hist.html", true));
//    boxManager.add("arpa", new Box("arpa", "ARPANET", "arpa.html", true));
//    boxManager.add("heutemorgen", new Box("heutemorgen", "Heute &amp; Morgen", "heutemorgen.html", true));

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
