async function fetchUsers(url, ids) {
  try {
    const resp = await Promise.all(ids.map((user)=> fetch(`${url}/${user}`)))
    const users = await Promise.all(resp.map((res)=> res.json()))
    const [user1, user2,user3] = users;
    // Object Destructuring.
    const {address:{geo:{lat, lng}}}= user1;
    const {address:{geo:{lat:lati, lng:long}}}= user2;
    const {address:{geo:{lat:latitu, lng:longit}}}= user3;
    console.log(lat, lng)
    console.log(lati, long)
    console.log(latitu, longit)
  } catch (error) {
    console.log(error);
  }
}
fetchUsers("https://jsonplaceholder.typicode.com/users", [9, 2, 3, 4, 6]);
