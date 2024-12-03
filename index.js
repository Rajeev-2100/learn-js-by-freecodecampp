
// intialize the count as 0
// listen for clicks on the increment button
// increment the count varible when the button is clicked 
//(log it out) change the count-el in the HTML to reflect the new count

let count = 0

function increment() {
    count = count + 1
    // console.log(count)
    document.getElementById("count-el").innerText = count
}


function decrement(){
    count = count - 1
    document.getElementById("count-el").innerText = count
}

function save(){
    console.log(count);   
}

save()





































