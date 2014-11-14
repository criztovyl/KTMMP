function Neighbourhood(){
	this.boxes = [];
	this.neighbours = [];
}

Neighbourhood.prototype = {
	add: function(box, neighbour, direction){
		
		if(this.boxes[box] == undefined)
			this.boxes[box] = [];
			
		if(this.boxes[neighbour] == undefined)
			this.boxes[neighbour] = [];
			
		this.boxes[box][direction] = neighbour;
		
		this.boxes[neighbour][reverseDirection(direction)] = box;
		
		console.log(this.boxes[box]);
	},
	get: function(box){
		return this.boxes[box]
	}
	
}