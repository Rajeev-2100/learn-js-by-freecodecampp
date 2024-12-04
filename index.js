
let count = 0
function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    document.getElementById("count-el").innerText = count
}
function decrement(){
    count -= 1
    document.getElementById("count-el").innerText = count
}
function save(){
    console.log(count);   
}
save()






























