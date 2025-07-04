// مرحله ظاهر شدن اولیه
gsap.to(".card", {
  duration: 1,
  scale: 1,
  opacity: 1,
  onComplete: startLoop
});

let rotation = 0;
let count = 0;

function startLoop() {
  if (count < 3) {
    rotation += 90;
    count++;

    gsap.to(".card", {
      duration: 0.5,
      y: -20,
      rotateZ: rotation,
      onComplete: () => {
        gsap.to(".card", {
          duration: 0.5,
          y: 20,
          onComplete: startLoop
        });
      }
    });
  } else {
    // انیمیشن ترکیدن
    gsap.to(".card", {
      duration: 0.5,
      scale: 2,
      opacity: 0,
      ease: "back.in(2)",
      onComplete: () => {
        console.log("💥 ترکید!");
      }
    });
  }
}
