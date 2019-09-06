let x = 0;
function setup() {
	createCanvas(700,700); // make an HTML canvas element width x height pixels
	theta = 180;
}

function draw() {
	background(225);
	textSize(32);
	translate(width/2, height/2);/*
	fill(180);
	text(hour(), -20, -20);
	fill(100);
	text(minute(), -20, 10);
	fill(0);
	text(second(), -20, 40);*/
	fill(0);
	
	let center_x = 0, center_y = 0;
	let radius = 75;

	x += 0.01;

	if (second() % 10 > 0 && second % 10 < 6) {
		let p1_x = center_x + radius * Math.sin(0.5*x), p1_y = center_y + radius * Math.cos(0.5*x);
		let p2_x = center_x - radius * Math.sin(0.5*x), p2_y = center_y - radius * Math.cos(0.5*x);
		ellipse(p1_x, p1_y, 50, 50);
		ellipse(p2_x, p2_y, 50, 50);
	}
	let p3_x = center_x - radius * Math.sin(x), p3_y = center_y + radius * Math.cos(x);
	let p4_x = center_x + radius * Math.sin(x), p4_y = center_y - radius * Math.cos(x);

	ellipse(p3_x, p3_y, 50, 50);
	ellipse(p4_x, p4_y, 50, 50);

	let p5_x = center_x - radius * Math.sin(-x), p5_y = center_y + radius * Math.cos(-x);
	let p6_x = center_x + radius * Math.sin(-x), p6_y = center_y - radius * Math.cos(-x);

	ellipse(p5_x, p5_y, 50, 50);
	ellipse(p6_x, p6_y, 50, 50);

	radius = radius * 2;
	/*
	let outer_disc_1_x = center_x + radius * Math.sin(0.5*x), outer_disc_1_y = center_y + radius * Math.cos(0.5*x);
	let outer_disc_2_x = center_x - radius * Math.sin(0.5*x), outer_disc_2_y = center_y - radius * Math.cos(0.5*x);

	ellipse(outer_disc_1_x, outer_disc_1_y, 50, 50);
	ellipse(outer_disc_2_x, outer_disc_2_y, 50, 50);
	*/
	let outer_disc_3_x = center_x - radius * Math.sin(-2*x), outer_disc_3_y = center_y + radius * Math.cos(-2*x);
	let outer_disc_4_x = center_x + radius * Math.sin(-2*x), outer_disc_4_y = center_y - radius * Math.cos(-2*x);

	ellipse(outer_disc_3_x, outer_disc_3_y, 50, 50);
	ellipse(outer_disc_4_x, outer_disc_4_y, 50, 50);

	radius = radius * 1.5;

	let outer_disc_7_x = center_x - radius * Math.sin(2*x), outer_disc_7_y = center_y + radius * Math.cos(2*x);
	let outer_disc_8_x = center_x + radius * Math.sin(2*x), outer_disc_8_y = center_y - radius * Math.cos(2*x);

	ellipse(outer_disc_7_x, outer_disc_7_y, 50, 50);
	ellipse(outer_disc_8_x, outer_disc_8_y, 50, 50);

	radius = radius * 1.5;

	let outer_disc_5_x = center_x - radius * Math.sin(-0.23*x), outer_disc_5_y = center_y + radius * Math.cos(-0.23*x);
	let outer_disc_6_x = center_x + radius * Math.sin(-0.23*x), outer_disc_6_y = center_y - radius * Math.cos(-0.23*x);

	ellipse(outer_disc_5_x, outer_disc_5_y, 50, 50);
	ellipse(outer_disc_6_x, outer_disc_6_y, 50, 50);
}

function render_disc(){}
