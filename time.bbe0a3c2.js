!function(){var e=document.querySelector(".start__time"),t=document.querySelector(".get__time"),a=document.querySelector(".input__time"),n={time:"",endTime:""};JSON.parse(localStorage.getItem("dataTime"));a.addEventListener("input",(function(){n.time=a.value,localStorage.setItem("timer",JSON.stringify(n))})),e.addEventListener("input",(function(e){e.target.value;var a=(new Date).getTime(),o=new Date(n.time).getTime()-a;if(localStorage.setItem("timer",JSON.stringify(n)),o>0){var i=Math.floor(o/864e5),r=Math.floor(o%864e5/36e5),c=Math.floor(o%36e5/6e4),m=Math.floor(o%6e4/1e3),l="".concat(i,"д ").concat(r,"г ").concat(c,"хв ").concat(m,"сек");t.textContent=l,n.endTime=l}}))}();
//# sourceMappingURL=time.bbe0a3c2.js.map