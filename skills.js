const radialSkills = document.querySelectorAll(".radial-skill");

radialSkills.forEach(skill => {
  const progress = skill.querySelector(".progress");
  const percentText = skill.querySelector(".percent");
  const percent = skill.getAttribute("data-percent");

  const offset = 283; // circumference of circle (2πr with r=45)
  const progressPercent = ((100 - percent)/100) * offset;

  setTimeout(() => {
    progress.style.strokeDashoffset = progressPercent;
  }, 500);

  let current = 0;
  const interval = setInterval(() => {
    if(current < percent){
      current++;
      percentText.textContent = current + "%";
    } else {
      clearInterval(interval);
    }
  }, 20);
});