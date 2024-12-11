let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// how do you keep the spaces between the words if I remove them the array?

for (let i = 0; i < sentence.length; i++){
    greetingEl.textContent += sentence[i] + " ";
}






















