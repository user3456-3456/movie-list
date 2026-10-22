let btn1 = document.getElementById("btn1")
let form1 = document.getElementById("form1")


const movielist = [
  { title: "The River Between", year: "2840" },
  { title: "Things Fall Apart", year: "2020" },
  { title: "Weep Not, Child", year: "2023" }
];

const list = document.getElementById("list");

function renderList() {
  list.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    const li = document.createElement("li");
    li.textContent = books[i].title + " by " + books[i].author;
    list.appendChild(li);
  }
}

renderList();