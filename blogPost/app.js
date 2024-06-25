const form = document.forms[0];
const viewPost = document.getElementById("view-posts");
const divContainer = document.getElementById("posts-container");
form.addEventListener("submit", handleSumbit);
viewPost.addEventListener("click", handleViewPosts);
const posts = [];
async function handleSumbit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const title = data.get("title");
  const content = data.get("content");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: content,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const post = await response.json();
  posts.push(post);
}
async function handleViewPosts() {
  for (let i of posts) {
    const respose = await fetch(
      `https://jsonplaceholder.typicode.com/users/${i.userId}`
    );
    const user = await respose.json();
    const postContainer = document.createElement("div")
    const edit = document.createElement("button");
    edit.textContent = "Edit";
    const delIcon = document.createElement("button");
    delIcon.textContent = "Delete";
    postContainer.classList.add("post")
    delIcon.classList.add("delete")
    edit.classList.add("edit")
    const title = document.createElement("h1");
    title.textContent = i.title;
    const para = document.createElement("p");
    para.textContent = i.body;
    const author = document.createElement("span");
    author.textContent = user.name;
    postContainer.appendChild(title);
    postContainer.appendChild(para);
    postContainer.appendChild(author);
    postContainer.appendChild(edit);
    postContainer.appendChild(delIcon);
    divContainer.appendChild(postContainer)

    document.body.appendChild(divContainer);
  }
}
