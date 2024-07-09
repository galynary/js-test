
const strBtn= document.querySelector(".start__time")
const endTime= document.querySelector(".get__time")
const time = document.querySelector(".input__time")
const dataTime={
    time:"",
    endTime:""
}
const timer =JSON.parse(localStorage.getItem(dataTime))
time.addEventListener("input", ()=> {
    dataTime.time= time.value
    localStorage.setItem('timer', JSON.stringify(dataTime))})

strBtn.addEventListener("click", ()=> {
  dataTime.endTime= endTime.value
  setInterval(function() {
    const time = document.querySelector(".input__time").value
    let now = new Date().getTime();
    let selectedTime = new Date(time).getTime();
    let distance = selectedTime - now;
    localStorage.setItem('timer', JSON.stringify(distance));
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const timeLeft = `${days}д ${hours}г ${minutes}хв ${seconds}сек`;
    endTime.textContent = timeLeft;
    
}, 1000);
})

    
  
    
 
  
