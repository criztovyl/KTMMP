function _es(str){
	return (str == undefined ? "" : str);
}
 
function _ses(str, sffx){
	return (str == undefined ? "" : str + sffx);
}

function Box(id, name, content) {
    this.id = id;
    this.name = name;
    this.content = content;
}

function reverseDirection(direction) {
    return direction == "right" ? "left" : direction == "left" ? "right" : direction == "up" ? "down" : direction == "down" ? "up" : "";
}

function change(current, target, direction) {
    var _direction = reverseDirection(direction);
    $(current).toggle('slide', { direction: direction }, 2000,
        function() {
            $(target).toggle('slide', {direction: _direction }, 2000)
        });
}

Box.prototype = {
    fullid: function() {
        return "#box" + this.id
    },
    navBox: function(from, direction) {
        return sprintf('<div class="%s subbox"><div onclick="change(\'%s\', \'%s\', \'%s\')">%s</div></div>', direction, from.fullid(), this.fullid(), reverseDirection(direction), this.arrow(direction));
    },
    box: function(visible) {
        //return this.div(sprintf("%s%s%s%s%s", this.neighbour("left"), this.neighbour("right"), this.neighbour("up"), this.neighbour("down"), this.content()), visible);
        return this.div(sprintf('%s<div class="vertical">%s%s</div>%s', this.neighbour("left"), this.neighbour("up"), this.neighbour("down"), this.neighbour("right")), visible);
    },
    div: function(value, visible) {
        return sprintf('<div class="box" id="box%s" %s>\n%s\n</div>', this.id, visible === true ? '' : 'style="display: none;"' ,value == undefined ? "" : value);
    },
    getContent: function() {
    	//return sprintf('<div class="content">%s</div>', this.name);
    	return this.content == undefined ? "This is " + this.name : this.content;
    },
    arrow: function(direction){
    	return sprintf('%2$s %1$s %2$s', this.name, direction == "right" ? "&darr;" : direction == "left" ? "&darr;" : direction == "up" ? "&uarr;" : direction == "down" ? "&darr;" : "");
    },
    neighbour: function(direction){
    	var box = this.neighbours[direction];
    	if(!(box == undefined || box.navBox == undefined)){
    		return box.navBox(this, direction) + "\n";
    	}
    	else{
    		return sprintf('<div class="%s subbox"></div>', direction);
    	}
    },
    print: function(visible, reference){
    	$(reference == undefined ? "body" : reference).append(this.box(visible));
    },
    printContent: function(){
        if($(content).length == 0)
            $("body").append('<div class="content"></div>');
        var content = this.getContent();
        $('.content').html(content);
    },
    setNeighbours: function(neighbours){
    	this.neighbours = neighbours;
    },
    switchTo: function(){
        this.printContent();
    },
    slide: function(direction){
        $(".content").html("");
        $(current).toggle('slide', { direction: direction }, 2000);
    }
}
function BoxManager(){
    this.array = [];
}
BoxManager.prototype = {
    add: function(id, box){
        this.array[id] = box;
    },
    get: function(id){
        return this.array[id];
    }
}
