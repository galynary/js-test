!function(){var c=document.querySelector(".container-palete"),e=[{hex:"#FA54D5",rgb:"250,84,213"},{hex:"#D8D245",rgb:"216,210,69"},{hex:"#E82929",rgb:"232,41,41"},{hex:"#0FA6B0",rgb:"15,166,176"},{hex:"#1641EC",rgb:"22,65,236"},{hex:"#B31FE7",rgb:"179,31,231"},{hex:"#E47814",rgb:"228,120,20"},{hex:"#821212",rgb:"130,18,18"},{hex:"#2D845A",rgb:"45,132,90"}].map((function(c){var e=c.hex,t=c.rgb;return'\n           <div class="color-card"> \n           <div class="color-swatch"\n           data-hex="'.concat(e,'"\n           data-rgb="').concat(t,'"\n           style="background-color: ').concat(e,'"\n           ></div>\n           <div class="color-meta">\n             <p>HEX:').concat(e,"</p>\n             <p> RGB:").concat(t,"</p>\n           </div>\n         </div>")})).join("");c.insertAdjacentHTML("beforeend",e),c.addEventListener("click",(function(e){if(!e.target.classList.contains("color-swatch"))return;var t=e.target;t.closest(".color-card").classList.add("color-swatch--is-active"),c.style.backgroundColor=t.dataset.hex,console.log(e.target.dataset.hex)}))}();
//# sourceMappingURL=index.7f0c16d6.js.map
