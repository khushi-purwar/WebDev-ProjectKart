let a = document.querySelectorAll(".title"),
	b = document.querySelectorAll(".drama"),
	c = document.querySelectorAll(".action"),
	d = document.querySelectorAll(".image-display-action");
var titles = [],dramas = [], actions = [], index = [];
	
let allbtn = document.getElementById("all"),
	dramabtn = document.getElementById("drama"),
	actionbtn = document.getElementById("action"),
	scifibtn = document.getElementById("scifi"),
	type = document.querySelector("#filter"),
	page = document.querySelector(".found");	

while (titles.length > 0) {
	titles.pop();
}
for (let i = 0; i < a.length; ++i) titles.push(a[i].textContent);
getFilter();

function get(el) { 
	for (let i = 0; i < index.length; ++i) { 
		if (index[i] == el) return (i);
	}
}

function removeHide() { 
	for (let i = 0; i < a.length; ++i) { 
		d[i].classList.remove("hide");
	}
}

function getFilter() { 
	let idx;
	removeHide();
	for (let i = 0; i < a.length; ++i) { 
		let temp = a[i].textContent;
		if (titles.includes(temp) == false) {
			idx = get(temp);
			d[idx].classList.add("hide");
		} 
	}
}

function update(val) { 
	val = val.toLowerCase();
	let cnt = 0, idx;
	if (val.length > 0) {
		for (let i = 0; i < titles.length; ++i) {
			idx = get(titles[i]);

			if (titles[i].toLowerCase().includes(val) == true) {
				d[idx].classList.remove("hide");
				++cnt;
			} else 
				d[idx].classList.add("hide");
		}
	}
	if (val.length == 0) getFilter();
	// Not Found
	if (cnt == 0 && val.length > 0)
		page.classList.remove("hide");
	else 
		page.classList.add("hide");
}

for (let i = 0; i < a.length; ++i) index.push(a[i].textContent);
for (let i = 0; i < b.length; ++i) dramas.push(b[i].textContent);
for (let i = 0; i < c.length; ++i) actions.push(c[i].textContent);
	
allbtn.addEventListener("click", function () { 
	while (titles.length > 0) {
		titles.pop();
	}
	type.textContent = allbtn.textContent;
	for (let i = 0; i < a.length; ++i) titles.push(a[i].textContent);
	getFilter();
})

dramabtn.addEventListener("click", function () {
	while (titles.length > 0) {
		titles.pop();
	}
	type.textContent = dramabtn.textContent;
	for (let i = 0; i < a.length; ++i) { 
		let temp = a[i].textContent;
		if (dramas.includes(temp) == true && actions.includes(temp) == false)
			titles.push(temp);
	} 
	getFilter();
})

actionbtn.addEventListener("click", function () {
	while (titles.length > 0) {
		titles.pop();
	}
	type.textContent = actionbtn.textContent;
	for (let i = 0; i < a.length; ++i) {
		let temp = a[i].textContent;
		if (dramas.includes(temp) == false && actions.includes(temp) == true)
			titles.push(temp);
	} 
	getFilter();
})

scifibtn.addEventListener("click", function () {
	while (titles.length > 0) {
		titles.pop();
	}
	type.textContent = scifibtn.textContent;
	for (let i = 0; i < a.length; ++i) {
		let temp = a[i].textContent;
		if (dramas.includes(temp) == false && actions.includes(temp) == false)
			titles.push(temp);
	} 
	getFilter();
})