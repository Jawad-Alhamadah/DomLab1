

let title = document.getElementsByClassName("main-title")[0]

title.style.color="rgb(162 162 205)"
title.style.backgroundColor="rgb(227 222 247)"


let paragraph = document.getElementById("main-paragraph")


paragraph.style.fontSize="40px"
paragraph.classList.add("text")


let img = document.getElementsByTagName("img")[0]
img.src="pexels-photo-460775.jpeg"
img.style.width="200px"

let item = document.createElement("li")
item.style.display="inline"
item.style.color="green"
item.style.display="inline"

item.style.border="1px solid black"
item.innerText="list item"

let list = document.querySelector("ul")
list.append(item)


item = document.createElement("li")
item.style.display="inline"
item.style.color="blue"
 

item.style.border="1px solid black"
item.innerText="list item"
list.append(item)


item = document.createElement("li")
item.style.display="inline"
item.style.color="purple"
 

item.style.border="1px solid black"
item.innerText="list item"
list.append(item)


let table = document.createElement("table")
table.classList.add("colored_table")

let row = document.createElement("tr")


let data_cell = document.createElement("td")
data_cell.innerText= "data"

row.appendChild(data_cell)


data_cell = document.createElement("td")
data_cell.innerText= "data"
row.appendChild(data_cell)

data_cell = document.createElement("td")
data_cell.innerText= "data"
row.appendChild(data_cell)

table.appendChild(row)
/////////////////////////////////////



row = document.createElement("tr")


data_cell = document.createElement("td")
data_cell.innerText= "data"

row.appendChild(data_cell)


data_cell = document.createElement("td")
data_cell.innerText= "data"
row.appendChild(data_cell)

data_cell = document.createElement("td")
data_cell.innerText= "data"
row.appendChild(data_cell)

table.appendChild(row)

//
document.body.appendChild(table)

// let col = document.createElement("tl")
// col.innerText="im row"
// table.appendChild(row)
// row = document.createElement("tr")
// table.appendChild(row)
// row = document.createElement("tr")
// table.appendChild(row)