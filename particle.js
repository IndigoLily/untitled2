function particle( x, y ) {
  this.pos = createVector( x, y );
  this.prevPos = this.pos.copy();
  this.vel = createVector( 0, random( 4, 6 ) );
  this.vel.rotate( random( TAU ) );
  this.acc = createVector( 0, 0 );
  this.applyForce = function( force ) {
    this.acc.add( force );
  }
  this.update = function() {
    // var force = createVector(0, 1);
    // force.rotate(random(TAU));
    // this.acc.add(force)
    this.vel.add( this.acc );
    this.vel.limit( 5 );
    this.prevPos = this.pos.copy();
    this.pos.add( this.vel );
    
    this.acc.mult( 0 );
    
    var center = createVector( width/2, height/2 );
    if( p5.Vector.dist( center, this.pos ) > width/2 ) {
      this.draw();
      this.pos = center.copy();
      this.prevPos = this.pos.copy();
      this.vel.rotate(random(TAU));
      // console.log('outside');
    }
  }
  this.draw = function() {
    stroke( 0 );
    strokeWeight( 1 );
    line( this.prevPos.x, this.prevPos.y, this.pos.x, this.pos.y );
    // point(this.pos.x, this.pos.y);
  }
}
