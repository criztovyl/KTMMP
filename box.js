function Box(id, name, content) {
    this.id = id;
    this.name = name;
    this.content = content;
}

function reverseDirection(direction) {
    return direction == "right" ? "left" : direction == "left" ? "right" : direction == "up" ? "down" : direction == "down" ? "up" : "";
}

Box.prototype = {
    arrow: function(direction){
    	return sprintf('%2$s %1$s %2$s', this.neighbours[direction] != undefined ? this.neighbours[direction].name : '', direction == "right" ? "&darr;" : direction == "left" ? "&darr;" : direction == "up" ? "&uarr;" : direction == "down" ? "&darr;" : "");
    },
    box: function(display){
        return sprintf('<div class="box" id="%1$s"%4$s>%2$s%3$s</div>', this.fullid(), this.navBoxes(), this.contentBox(), display ? '' : ' style="display: none;"');
    },
    navBoxes: function(){
        return sprintf('<div class="left">%s</div><div class="vertical">%s%s</div><div class="right">%s</div>', this.navBox('left'), this.navBox('up'), this.navBox('down'), this.navBox('right'));
    },
    contentBox: function(){
        return sprintf('<div class="content">%s</div>', this.content);
    },
    navBox: function(direction){
        return sprintf('<div class="%1$s subbox">%2$s</div>', direction, this.neighbours[direction] != undefined ? '<div onclick="javascript:boxManager.change(this.offsetParent.id, this.parentElement.className.split(\' \')[0]);" >' + this.arrow(direction) + '</div>' : '');
    },
    fullid: function(){
        return "box" + this.id;
    },
    print: function(visible, neighbours){
        $('body').append(this.box(visible, neighbours));
    },
    setNeighbours: function(neighbours){
        this.neighbours = neighbours;
    }
}
function BoxManager(arrangement){
    this.array = {};
    this.arrangement = arrangement;
}
BoxManager.prototype = {
    add: function(id, box, start){
        id = this.formatId(id);
        this.array[id] = box;
        if(start)
            this.startID = id;
    },
    get: function(id){
        return this.array[this.formatId(id)];
    },
    neighbour: function(id, direction){
        id = this.formatId(id);
        
        var nI = this.neighbourIndexDiff(direction);

        var rowAndCol = this.getRowAndIndex(id);

        if(rowAndCol != undefined){
            var row_ = nI[0] == 0 ? rowAndCol[0] + nI[1]: rowAndCol[0];
            var col_ = nI[0] == 1 ? rowAndCol[1] + nI[1]: rowAndCol[1];
                
            if(col_ >= 0 && col_ < this.arrangement[0].length && row_ >= 0 && row_ < this.arrangement[0].length)
           return this.get(this.arrangement[row_][col_]);
        }
    },
    neighbourIndexDiff: function(direction){
         return direction == "right" ? [1, 1] : direction == "left" ? [1, -1] : direction == "up" ? [0, -1] : direction == "down" ? [0, 1] : [-1, 0];
    },
    getRowAndIndex: function(id){
        id = this.formatId(id);
        for(var i = 0; i < this.arrangement.length; i++){
            var index = this.arrangement[i].indexOf(id);
            if(index != -1)
                return [i, index];
        }
    },
    change: function(id, direction){
        id = this.formatId(id);
        var current = "#" + id;
        var target = "#"+  this.neighbour(id.replace("box", ""), direction).fullid();
        var _direction = reverseDirection(direction);
        console.log(current + " " + target + " " + direction);
       
        $(current).toggle('slide', { direction: _direction }, 2000,
            function() {
                $(target).toggle('slide', {direction: direction }, 2000)
        });
        
    },
    print: function(){
        var start = this.get(this.startID);
        $.each(this.array, function(index, value){
            value.setNeighbours(boxManager.neighbours(index));
            value.print(value == start ? true : false);
        })
    },
    neighbours: function(id){
        id = this.formatId(id);
        var neighbours = {};
        var directions = ["up", "left", "down", "right"];
        for(var i = 0; i < directions.length; i++){
            neighbours[directions[i]] = this.neighbour(id, directions[i]);
        }
        return neighbours;
    },
    formatId: function(id){
        id_ = parseInt(id);
        return isNaN(id_) ? id : id_;
    }
}
