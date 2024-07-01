const apiUrls = [
  "https://jsonplaceholder.typicode.com/users/4",
  "https://jsonplaceholder.typicode.com/posts/5",
  "https://jsonplaceholder.typicode.com/posts/9",
];
async function fetchMultipleApis() {
  /*
  Promises.allSettled If you mess up the url it will return all array of settled result.
======================================================================================
  const responses = await Promise.allSettled(apiUrls.map((url) => fetch(url)));
  (responses.map(async each => {
    if (each.status === 'fulfilled') {
      console.log(await each.value.json());
    } else {
      console.log(each.status);
    }
  }));*/
  /*
  promise.all() works if one promise rejected it will return immediately with the error
  ====================================================================================
  const responses = await Promise.all(apiUrls.map(url=> fetch(url)));
  const datas = await Promise.all(responses.map(data=> data.json()))
  console.log(datas)

   */
  /*
  Promise.race() works if one promise is Settled(reject/fulfilled) it will return immediately with the Response. It will be fulfilled
  if the first settled Promise is fulfilled and reject if the first Promise settled is rejected.
===================================================================================================
  const responses = await Promise.race(apiUrls.map((each) => fetch(each)));
  console.log(await responses.json());
   */
/*
Promise.any() works if one promise is fulfilled it returns the return value from the Promises
==============================================================================================
*/
  const responses = await Promise.any(apiUrls.map(url=> fetch(url)));
  console.log(await responses.json())
}
fetchMultipleApis();
