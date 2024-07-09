
const strBtn= document.querySelector(".start__time")
const endTime= document.querySelector(".get__time")
const time = document.querySelector(".input__time")
const dataTime={
    time:"",
    endTime:""
}
const timer =JSON.parse(localStorage.getItem('dataTime'))
time.addEventListener("input", ()=> {
    dataTime.time= time.value
    localStorage.setItem('timer', JSON.stringify(dataTime))})

strBtn.addEventListener("input", (event)=> {
event.target.value
const now = new Date().getTime();
const end = new Date(dataTime.time).getTime();
const distance = end - now;
localStorage.setItem('timer', JSON.stringify(dataTime));
if (distance > 0) {
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const timeLeft = `${days}д ${hours}г ${minutes}хв ${seconds}сек`;
  endTime.textContent = timeLeft;
  dataTime.endTime = timeLeft;
 
}})
