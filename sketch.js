var p = [];
var desiredFPS = 60;

function setup() {
  var size = ( windowWidth > windowHeight ) ? windowHeight/1.5 : windowWidth/1.5;
  createCanvas (size, size );
}

function draw() {
  background( 255 );
  if( frameRate() > desiredFPS ){
    p.push( new particle( width/2, height/2 ) )
  }
  // if(frameRate() < 30) {
  //   p.splice(0, 2);
  // }
  
  for( var i = 0; i < p.length; i++ ) {
    p[i].update();
    p[i].draw();
  }
}

function createParticle() {
  let center = createVector( width/2, height/2 );
  let offset = createVector(1, 0);
  offset.setMag( random( 0, width/2 ) -3 );
  offset.rotate( random( TAU ) );
  let position = p5.Vector.add( center, offset );
  p.push(new particle( position.x, position.y ))
}
