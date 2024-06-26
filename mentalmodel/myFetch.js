function myFetch(url){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.response = "json";
        xhr.send();
        xhr.onload =()=> {
            if(xhr.status === 200 || xhr.readyState ===4) {
                resolve(xhr.response)
            }
        }
        xhr.onerror =()=> {
            reject(xhr.response)
        }
    })
}

async function getData() {
    const resp = await myFetch("https://jsonplaceholder.typicode.com/users")
    console.log(resp)
}
getData()