/**
 * Write your challenge solution here
 */
const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const ageInput = document.getElementById("ageInput");
const bioInput = document.getElementById("bioInput");
const Name = document.getElementById("nameDisplay");
const Job = document.getElementById("jobDisplay");
const Age = document.getElementById("ageDisplay");
const Bio = document.getElementById("bioDisplay");

nameInput.addEventListener("input",()=>{
Name.innerText = nameInput.value || "Not provided" 
})
jobInput.addEventListener("input",()=>{
Job.innerText = jobInput.value || "Not provided"
})
ageInput.addEventListener("input",()=>{
Age.innerText = ageInput.value || "Not provided"
})
bioInput.addEventListener("input",()=>{
Bio.innerText = bioInput.value || "Not provided"
})