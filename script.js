document.addEventListener("DOMContentLoaded", function(){

/* =========================
   TYPING ANIMATION
========================= */

const text = "AI_ENGINEER | ML_DEVELOPER | WEB_DEVELOPER";
let index = 0;

function type(){
    if(index < text.length){
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(type,60);
    }
}
type();


/* =========================
   SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(el => {

        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }

    });

});


/* =========================
   MATRIX BACKGROUND
========================= */

const canvas = document.getElementById("matrix");

if(canvas){

const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01AIENGINEERML";
const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];

for(let i=0;i<columns;i++){
drops[i] = 1;
}

function draw(){

ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#00ffcc";
ctx.font = fontSize + "px monospace";

for(let i=0;i<drops.length;i++){

const text = letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
drops[i] = 0;
}

drops[i]++;

}

}

setInterval(draw,35);

}


/* =========================
   PROJECT MODAL
========================= */

const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");

if(modal){

const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const close = document.querySelector(".close");

cards.forEach(card=>{

card.addEventListener("click",()=>{

modal.style.display="flex";

modalTitle.innerText = card.querySelector("h3").innerText;
modalDesc.innerText = card.querySelector("p").innerText;

});

});

close.onclick = ()=>{

modal.style.display="none";

};

}


/* =========================
   PARTICLE MOUSE TRAIL
========================= */

const particleCanvas = document.getElementById("particles");

if(particleCanvas){

const pctx = particleCanvas.getContext("2d");

particleCanvas.width = window.innerWidth;
particleCanvas.height = window.innerHeight;

let particles = [];

document.addEventListener("mousemove",(e)=>{

particles.push({
x:e.clientX,
y:e.clientY,
size:3
});

});

function animateParticles(){

pctx.clearRect(0,0,particleCanvas.width,particleCanvas.height);

for(let i=0;i<particles.length;i++){

let p = particles[i];

pctx.fillStyle="#00ffcc";

pctx.beginPath();
pctx.arc(p.x,p.y,p.size,0,Math.PI*2);
pctx.fill();

p.size -=0.05;

if(p.size <=0){
particles.splice(i,1);
i--;
}

}

requestAnimationFrame(animateParticles);

}

animateParticles();

}


/* =========================
   TERMINAL COMMAND SYSTEM
========================= */

const commandInput = document.getElementById("command");
const output = document.getElementById("output");

if(commandInput){

commandInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

const cmd = commandInput.value.toLowerCase();

let response="";

if(cmd==="help"){
response="commands: about, projects, contact";
}
else if(cmd==="about"){
response="AI engineer building ML systems";
}
else if(cmd==="projects"){
response="AI Resume Analyzer | Forecasting Engine";
}
else if(cmd==="contact"){
response="email: dhanushraj200@gmail.com";
}
else{
response="command not found";
}

output.innerHTML += "<p>> "+cmd+"</p><p>"+response+"</p>";

commandInput.value="";

}

});

}


/* =========================
   THREE.JS NETWORK SPHERE
========================= */

const networkCanvas = document.getElementById("network");

if(networkCanvas){

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({
canvas:networkCanvas,
alpha:true
});

renderer.setSize(window.innerWidth,window.innerHeight);

camera.position.z = 5;

const geometry = new THREE.SphereGeometry(2,32,32);

const material = new THREE.MeshBasicMaterial({
wireframe:true,
color:0x00ffcc
});

const sphere = new THREE.Mesh(geometry,material);

scene.add(sphere);

function animateNetwork(){

requestAnimationFrame(animateNetwork);

sphere.rotation.x += 0.002;
sphere.rotation.y += 0.003;

renderer.render(scene,camera);

}

animateNetwork();

}


/* =========================
   AI CHAT BOT
========================= */

const chatInput = document.getElementById("chat-input");
const chatBody = document.getElementById("chat-body");

if(chatInput){

chatInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

let msg = chatInput.value.toLowerCase();
let reply="";

if(msg.includes("skills")){
reply="Python, ML, Deep Learning, Full Stack";
}
else if(msg.includes("projects")){
reply="AI Resume Analyzer, Forecasting Engine";
}
else if(msg.includes("contact")){
reply="Email: dhanushraj200@gmail.com";
}
else{
reply="Ask about skills, projects, or contact";
}

chatBody.innerHTML += "<p>> "+msg+"</p><p>"+reply+"</p>";

chatInput.value="";

}

});

}


/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load",()=>{

setTimeout(()=>{

const loader = document.getElementById("loader");

if(loader){
loader.style.display="none";
}

},2000);

});

});