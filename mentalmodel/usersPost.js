async function fetchUserPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log()
for (let user of users){  
    const {name, email, id} = user
    const postsResp = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const [each] = await postsResp.json();
    const {body} = each
    console.log({
        User:name,
        Email:email,
        post:body
    })
}
 
}
fetchUserPost();
