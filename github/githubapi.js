const container = document.getElementById("container");
        const input = document.getElementById("username")
        container.addEventListener("click", function(event){
           if(event.target.tagName === "BUTTON"){
            const promise = fetch(`https://api.github.com/users/${input.value}`);
            promise.then(function(data){
                const resp = data.json()
                console.log(resp)
            })
           }
        })