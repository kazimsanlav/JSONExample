// Example of loading data from JSON file
var person;

function preload(){
	person = loadJSON('data.json');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}


function draw() {
	background(0);
	drawPerson(person);
}

function drawPerson(person){
	angleMode(DEGREES);
	rectMode(CENTER);
	noStroke();

	// information about person
	var x = person.x;
	var y = person.y;
	var head_len = person.height*(1/5);
	var body_len = person.height*(2/5);
	var leg_len = person.height*(2/5);
	var arm_len = person.height*(3/10);
	var arm_angle = person.arm_angle;
	var leg_angle = person.leg_angle;


	
	//draw head
	push();
	if(person.gender == 'male'){
		ellipse(x, y-person.height, head_len);
	}else{
		//add hair
		ellipse(x, y-person.height, head_len);
	}
	fill('red');
	ellipse(x,y-person.height,4);

	pop();
	
	//draw body
	push();
	rect(x, y-person.height+head_len/2+body_len/2, 20, body_len);
	fill('red');
	ellipse(x,y-person.height+head_len/2+body_len/2,4);
	pop();

	//draw arms

	//first one
	push();
	translate(x-10-arm_len/2*sin(arm_angle), y-person.height+head_len/2+arm_len/2*cos(arm_angle));
	rotate(arm_angle);
	rect(0,0,6,arm_len);
	strokeWeight(4);
	fill('red');
	ellipse(0,0,4);
	pop();
	
	//second one
	push();
	translate(x+10+arm_len/2*sin(arm_angle), y-person.height+head_len/2+arm_len/2*cos(arm_angle));
	rotate(-arm_angle);
	rect(0,0,6,arm_len);
	strokeWeight(4);
	fill('red');
	ellipse(0,0,4);
	pop();

	// draw legs

	//first leg
	push();	
	translate(x-5-leg_len/2*sin(leg_angle), y-10-leg_len+leg_len/2*cos(leg_angle));
	rotate(leg_angle);
	rect(0,0,6,leg_len);
	fill('red');
	ellipse(0,0,4);
	pop();

	//second leg
	push();	
	translate(x+5+leg_len/2*sin(leg_angle), y-10-leg_len+leg_len/2*cos(leg_angle));
	rotate(-leg_angle);
	rect(0,0,6,leg_len);
	fill('red');
	ellipse(0,0,4);
	pop();

}
function mouseDragged(){
	movePerson();
	moveArms();
}

function movePerson(){
	person.x = mouseX;
	person.y = mouseY;
}

function moveArms(){

	var offset_angle = map(mouseY, 0, windowHeight, 180, 0);
	
	person.arm_angle = offset_angle;
	person.leg_angle = offset_angle;

}