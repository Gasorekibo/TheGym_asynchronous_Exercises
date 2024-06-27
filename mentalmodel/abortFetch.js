//Qstn: Write a function that takes a URL and fetches data from that URL but aborts 
//when the request takes more than 10ms

async function fetchDataWithTimeout(url, timeout) {
  try {
    const controller = new AbortController();
    const { signal } = controller;
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    const resp = await fetch(url, { signal });
    if (resp) {
      clearTimeout(timeoutId);
      const data = await resp.json();
      console.log(data);
    }
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request aborted due to Time limit");
    } else {
      console.error("Error:", error.message);
    }
  }
}
fetchDataWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 10);
