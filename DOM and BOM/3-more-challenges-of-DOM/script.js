//example-1
let eventHandling = document.getElementById("clickMeButton");
eventHandling.addEventListener('mouseover',function(){
    alert('chaiCode')
})

//example-2
let teaList = document.getElementById("teaList");
teaList.addEventListener('click',function(event){
    console.log(event.target);    
    if(event.target && event.target.matches('.teaItem')){
        alert(`You selected ${event.target.textContent}`);
    }
})

//example-3 Form handling
let feedBackForm = document.getElementById("feedbackForm");
feedBackForm.addEventListener('submit',function(event){
    event.preventDefault();
    let feedBackInput = document.getElementById("feedbackInput").value;
    let feedBackDisplay = document.getElementById("feedbackDisplay");
    feedBackDisplay.textContent = `Feedback is ${feedBackInput}`
    console.log(feedBackInput);
    alert(`Submitted`)
})

//example-4
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('domStatus').textContent = 'DOM fully Loaded'  
})

//example-5
let toggleHighlight = document.getElementById("toggleHighlight");
toggleHighlight.addEventListener("click",function(){
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");

})