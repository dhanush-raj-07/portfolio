// HERO TYPED EFFECT
var typed = new Typed(".typed", {
  strings: ["AI Developer", "Web Developer", "ML Enthusiast"],
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
  loop: true
});

// HERO COUNTERS
const counters = document.querySelectorAll(".count");
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 200; // speed
    if(c < target){
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 10);
    } else { counter.innerText = target; }
  };
  updateCounter();
});