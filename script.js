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

  for (let i = 0; i < movielist.length; i++) {
    const li = document.createElement("li");
    li.textContent = movielist[i].title + " released " + movielist[i].year;
    list.appendChild(li);
  }
}

renderList();

btn1.addEventListener
form1.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form1);
  const title = formData.get("title").trim();
  const year = formData.get("year").trim();

  if (title === "" || year === "") {
    return;
  }

  const newMovie = { title: title, year: year };
  movielist.push(newMovie);

  renderList();
  form1.reset();
});