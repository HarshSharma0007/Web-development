<<<<<<< HEAD
// document.getElementById("count-el").innerText = 5

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(saveEl);
function increment() {
    count+=1
    //countEl.innerText = count;//instead of this
    countEl.textContent=count
}
function save(){
    let countStr = count + " -"
    saveEl.innerText += countStr
    countEl.textContent= 0
    count=0

}
















// let count = 0
// let saveEl = document.getElementById("save-el")
// let countEl = document.getElementById("count-el")

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContenttStr
//     countEl.textContent = 0
//     count = 0
// }

// console.log("Let's count people on the subway!")



=======
let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(saveEl);
function increment() {
    count+=1
    countEl.textContent=count
}
function save(){
    let countStr = count + " -"
    saveEl.innerText += countStr
    countEl.textContent= 0
    count=0
}
>>>>>>> 4a7c2dd453512d5075d820cb372061a37350fac0
