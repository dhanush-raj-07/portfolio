// AI Chatbot
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatOutput = document.getElementById("chatOutput");

sendBtn.addEventListener("click", () => {
  const msg = userInput.value.trim();
  if(!msg) return;
  let response = "I received: " + msg;
  if(msg.toLowerCase().includes("hello")) response = "Hello! How can I assist you with AI today?";
  chatOutput.innerHTML += `<p><strong>You:</strong> ${msg}</p>`;
  chatOutput.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
  userInput.value = "";
});

// ML Prediction Demo
const predictBtn = document.getElementById("predictBtn");
const feature1 = document.getElementById("feature1");
const feature2 = document.getElementById("feature2");
const predictionOutput = document.getElementById("predictionOutput");

predictBtn.addEventListener("click", () => {
  const f1 = parseFloat(feature1.value);
  const f2 = parseFloat(feature2.value);
  if(isNaN(f1) || isNaN(f2)){
    predictionOutput.textContent = "Please enter valid numbers!";
    return;
  }
  const result = (f1*0.6 + f2*0.4).toFixed(2);
  predictionOutput.textContent = `Predicted Value: ${result}`;
});