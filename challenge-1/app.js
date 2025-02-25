/**
 * Write your challenge solution here
 */
const body = document.getElementById("body");
const toggleButton = document.getElementById("toggleButton");
const bulb = document.getElementById("bulb");
const Status = document.getElementById("status");
function On() {
  body.classList.add("dark-mode");
  bulb.classList.remove("off");
  toggleButton.innerText = "Turn Off";
  Status.innerText = "Status: On";
}
function Off() {
  body.classList.remove("dark-mode");
  bulb.classList.add("off");
  toggleButton.innerText = "Turn On";
  Status.innerText = "Status: Off";
}
On();
toggleButton.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    Off();
  } else {
    On();
  }
});
