!function(){var e=document.querySelector(".menu-list"),t=new Set;e.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;console.log(e.target.textContent);var n=e.target,a=n.dataset.value,l=n.classList.contains("menu-link--active");l?t.delete(a):t.add(a);n.classList.toggle("menu-link--active",!l),console.log(t)}))}();
//# sourceMappingURL=index.08379db5.js.map
