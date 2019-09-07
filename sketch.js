let x = 0;
function setup() {
	createCanvas(700,700); // make an HTML canvas element width x height pixels
}

function draw() {
	if (hour() > 18) {
		background(0, 0, 80);
	} else {
		background(230, 247, 255);
	}
	translate(width/2, height/2);

	let orbit_radius = 75;

	x += 0.01;

	// Disc radius in pixels for H:M:S = 50:40:20

	// The discs for seconds
	// Appear every second
	if (second() % 2 == 0) {
		let second_disc1_x = 0.2 * orbit_radius, second_disc1_y = 0;
		let second_disc2_x = -0.2 * orbit_radius, second_disc2_y = 0;
		if (hour() > 12) {
			fill(225);
		} else {
			fill(20);
		}
		
		noStroke();
		ellipse(second_disc1_x, second_disc1_y, 20, 20);
		ellipse(second_disc2_x, second_disc2_y, 20, 20);
	}

	// The discs for the minutes
	fill(90);
	orbit_radius = orbit_radius * 2;

	let minute_disc3_x = - orbit_radius * Math.sin(-0.75*x), minute_disc3_y = + orbit_radius * Math.cos(-0.75*x);
	let minute_disc4_x = + orbit_radius * Math.sin(-0.75*x), minute_disc4_y = - orbit_radius * Math.cos(-0.75*x);
	let minute_disc7_x = - orbit_radius * Math.sin(0.75*x), minute_disc7_y = + orbit_radius * Math.cos(0.75*x);
	let minute_disc8_x = + orbit_radius * Math.sin(0.75*x), minute_disc8_y = - orbit_radius * Math.cos(0.75*x);

	if (minute() > 15) {
		ellipse(minute_disc3_x, minute_disc3_y, 40, 40);
	}
	if (minute() > 30) {
		ellipse(minute_disc4_x, minute_disc4_y, 40, 40);
	}
	orbit_radius = orbit_radius * 1.5;
	if (minute() > 45) {
		ellipse(minute_disc7_x, minute_disc7_y, 40, 40);
	}
	if (minute() > 59) {
		ellipse(minute_disc8_x, minute_disc8_y, 40, 40);
	}

	// The discs for the hours
	// The first four hour-discs are around the seconds orbit
	// The rest are spread outwards at 3x, then 1.5x for successive 4
	fill(180);
	noStroke();
	orbit_radius /= 3;
	let number_hour_circles = hour() % 12;

	if (number_hour_circles > 4) {
		let hour_disc1_x = - orbit_radius * Math.sin(x), hour_disc1_y = + orbit_radius * Math.cos(x);
		let hour_disc2_x = + orbit_radius * Math.sin(x), hour_disc2_y = - orbit_radius * Math.cos(x);
		let hour_disc3_x = - orbit_radius * Math.sin(-x), hour_disc3_y = + orbit_radius * Math.cos(-x);
		let hour_disc4_x = + orbit_radius * Math.sin(-x), hour_disc4_y = - orbit_radius * Math.cos(-x);

		ellipse(hour_disc1_x, hour_disc1_y, 50, 50);
		ellipse(hour_disc2_x, hour_disc2_y, 50, 50);
		ellipse(hour_disc3_x, hour_disc3_y, 50, 50);
		ellipse(hour_disc4_x, hour_disc4_y, 50, 50);

		number_hour_circles -= 4;
	}

	orbit_radius = orbit_radius * 3;

	for (var i = 0; i < number_hour_circles; i++) {
		let angular_position = 2 * PI * number_hour_circles / 12;
		let planet_x = 0, planet_y = 0;

		if (i%4 === 0) {
			planet_x = planet_x - orbit_radius * Math.sin(x + angular_position);
			planet_y = planet_y + orbit_radius * Math.cos(x + angular_position);
		}
		else if (i%4 === 1) {
			planet_x = planet_x + orbit_radius * Math.sin(x + angular_position);
			planet_y = planet_y - orbit_radius * Math.cos(x + angular_position);
		}
		else if (i%4 === 2) {
			planet_x = planet_x - orbit_radius * Math.sin(-(x + angular_position));
			planet_y = planet_y + orbit_radius * Math.cos(-(x + angular_position));
		}
		else {
			planet_x = planet_x + orbit_radius * Math.sin(-(x + angular_position));
			planet_y = planet_y - orbit_radius * Math.cos(-(x + angular_position));
		}
		ellipse(planet_x, planet_y, 50, 50);

		if (i > 4) {
			orbit_radius *= 1.5;
		}
	}
}
