import Sketch from "react-p5";
import React from "react";

const P5Sketch = (props) => {
  let width = window.innerWidth;
  let height = window.innerHeight;

  function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  // this class describes the properties of a single particle.
  class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
    constructor(){
      this.x = Math.floor(Math.random() * width);
      this.y = Math.floor(Math.random() * height);
      this.r = Math.floor(Math.random() * 8) + 1;
      this.xSpeed = Math.floor(Math.random() * 2);
      this.ySpeed = Math.floor(Math.random() * 1.5);
    }

  // creation of a particle.
    createParticle(obj) {
      obj.noStroke();
      // obj.fill('rgba(200,169,169,0.5)');
      // obj.fill("rgba(4, 15, 22, 0.1)");
      obj.fill("white")
      obj.circle(this.x, this.y, this.r);
    }

  // setting the particle in motion.
    moveParticle() {
      if(this.x < 0 || this.x > width)
        this.xSpeed*=-1;
      if(this.y < 0 || this.y > height)
        this.ySpeed*=-1;
      this.x+=this.xSpeed;
      this.y+=this.ySpeed;
    }

  // this function creates the connections(lines)
  // between particles which are less than a certain distance apart
    joinParticles(particles, obj) {
      particles.forEach(element =>{
        let dis = obj.dist(this.x,this.y,element.x,element.y);
        if(dis<85) {
          // obj.stroke("rgba(255,255,255,0.04)");
          // obj.stroke("rgba(4, 15, 22, 0.1)
          obj.stroke("white")
          obj.line(this.x, this.y, element.x, element.y);
        }
      });
    }
  }

  // an array to add multiple particles
  let particles = [];

  function setup(p5, canvasParentRef) {
    let cnv = p5.createCanvas(width, height).parent(canvasParentRef);
    cnv.position(0, 0, "fixed");
    cnv.style("z-index", -5);
    for(let i = 0; i < width/10; i++){
      particles.push(new Particle());
    }
  }

  function draw(p5) {
    // p5.background('#040f16');
    p5.background("#0f172a");
    for (let i = 0; i < particles.length; i++) {
      particles[i].createParticle(p5);
      particles[i].moveParticle();
      particles[i].joinParticles(particles.slice(i), p5);
    }
  }

  return <Sketch setup={setup} draw={draw} />;
};

export default P5Sketch;

// const setup = (p5, canvasParentRef) => {
//     let cnv = p5.createCanvas(width, height).parent(canvasParentRef);
//     cnv.position(0, 0, "fixed");
//     cnv.style("z-index", -1);
//   };

//   const draw = (p5) => {
//     p5.background("rgba(200,169,169,0.1)");
//     p5.noStroke();
//     p5.fill("blue"); 
//     p5.circle(xPos, yPos, radius);
//   };