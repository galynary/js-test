const e=document.querySelector(".menu-list");let t=new Set;e.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;console.log(e.target.textContent);const n=e.target,l=n.dataset.value,o=n.classList.contains("menu-link--active");o?t.delete(l):t.add(l);n.classList.toggle("menu-link--active",!o),console.log(t)}));
//# sourceMappingURL=index.2e545a4f.js.map
