!function(){var e=[{label:"HTML"},{label:"CSS"},{label:"JAVASCRIPT"},{label:"Node.js"},{label:"React"},{label:"MongooDB"},{label:"Redux"},{label:"Next.js"},{label:"Vue.js"}],l={list:document.querySelector(".list-js"),input:document.querySelector("#filter")};function n(e){return e.map((function(e){return"<li>".concat(e.label,"</li>")})).join("")}function t(e){l.list.innerHTML=e}l.input.addEventListener("input",_.debounce((function(l){var o=l.target.value.toLowerCase(),a=e.filter((function(e){return e.label.toLowerCase().includes(o)}));console.log(a),t(n(a))}),300)),t(n(e))}();
//# sourceMappingURL=index.644aff72.js.map