// chrome://extensions/
const inputBtn = document.querySelector("#input-btn")
const inpulEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const deleteBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
let myLeads= []

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active:true , currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads" , JSON.stringify(myLeads))
        render(myLeads)
    })
})

deleteBtn.addEventListener("dblclick" ,function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click",function(){
    myLeads.push(inpulEl.value)
    inpulEl.value = "";
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
    render(myLeads);   
})

function render(leads){
let listItems = ""
for (let i =0 ; i<leads.length;i++){
    listItems += `
    <li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
        </a>
    </li>`   
}
ulEl.innerHTML = listItems
}
