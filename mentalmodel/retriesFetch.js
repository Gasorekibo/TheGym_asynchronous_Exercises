async function retrieFetching(url, retries) {
try {
  const resp = await fetch(url);
  const data = await resp.json()
  console.log(data)
} catch (error) {
    if(retries > 0) {
      console.log(`Retrying... ${retries}`)
      await retrieFetching(url, retries - 1)
      } else {
        console.log("Failed to fetch")
      }
    }
  
}

retrieFetching("https://jsonplaceholder.typicode.com/posts/1",7)