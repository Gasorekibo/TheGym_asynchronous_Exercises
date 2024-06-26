async function countingTotal(url) {
  const response = await Promise.all(url.map((each) => fetch(each)));
  const data = await Promise.all(response.map((res) => res.json()));
  for (let each of data) {
    console.log(each.length);
  }
}
countingTotal([
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
]);
