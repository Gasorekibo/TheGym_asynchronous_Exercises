const good = document.getElementById("container");
function createContainer(heading, paragraph, comment) {
  const parent = document.createElement("div");
  const title = document.createElement("h1");
  const par = document.createElement("p");
  const list = document.createElement("li");
  title.innerText = heading.toUpperCase();
  par.innerText = paragraph;
  list.innerText = comment;
  parent.appendChild(title);
  parent.appendChild(par);
  parent.appendChild(list);
  good.appendChild(parent);
  document.body.appendChild(good);
}
async function fetchPost() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await resp.json();

  for (let simple = 0; simple <= 10; simple++) {
    const resp = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${data[simple]["id"]}`
    );
    const comm = await resp.json();
    createContainer(data[simple]["title"], data[simple]["body"], comm.body);
  }
}
fetchPost();
