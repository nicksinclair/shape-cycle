let SHAPE_SIZE = 30;

// THEMES
let dynamicTheme = [];
let theme1 = [];
let theme2 = [];
let theme3 = [];
let theme4 = [];
let PALETTE = [];

let maxRings;
let minCanvasDimension;
let maxCanvasDimension;
let diameterFactor;

let rings = [];
let growthRate = 1;

function setup() {
  pixelDensity(1);
  colorMode(HSB);

  createCanvas(800, 800);

  // MODES
  rectMode(CENTER);
  angleMode(DEGREES);

  // THEMES
  theme1 = [
    color(0, 0, 10), // dark gray
    color(0, 0, 40), // light gray
    color(0, 0, 70) // very light gray
  ];

  theme2 = [
    color(180, 100, 30), // dark cyan
    color(180, 100, 60), // light cyan
    color(180, 100, 90) // very light cyan
  ];

  theme3 = [
    color(300, 100, 30), // dark magenta
    color(300, 100, 60), // light magenta
    color(300, 100, 90) // very light magenta
  ];
  
  theme4 = [
    color(60, 100, 30), // dark yellow
    color(60, 100, 60), // light yellow
    color(60, 100, 90) // very light yellow
  ];

  PALETTE = theme4;

  maxRings = floor(random(3, 12)) + 1;
  minCanvasDimension = min(width, height);
  maxCanvasDimension = max(width, height);
  diameterFactor = (minCanvasDimension / maxRings);

  generateRings();
}

function draw() {
  background(PALETTE[2]);
  noFill();
  noStroke();

  // renderRings();
  renderRingShapes();

  // Uncomment to stop interactivity
  // noLoop();
}

function generateRings() {
  for (let i = 0; i <= maxRings; i++) {
    rings.push(new Ring(0, 0, diameterFactor * i));
  }

  rings.forEach(ring => {
    ring.allocateShapes();
  });
}

function renderRings() {
  rings.forEach(ring => {
    ring.render();
  });
}

function renderRingShapes() {
  rings.forEach(ring => {
    if (ring.diameter > (maxCanvasDimension * 1.5)) {
      rings.pop();
      const newRing = new Ring(0, 0, 0);
      newRing.allocateShapes();
      rings.unshift(newRing);
    }
    
    ring.renderShapes();
    ring.grow(growthRate);
  });
}