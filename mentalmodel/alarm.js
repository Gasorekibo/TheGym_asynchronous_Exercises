function createAlarm(name, delay) {
   return new Promise(function(reject, resolve){
    setTimeout(function(){
        if(delay >= 2) {
            resolve(`${name} Wakeup🤣`)
        } else {
            reject("Delay is not sufficient")
        }
    }, delay*1000)
   })     
}
createAlarm("Gasore", 3).then(function(mess){
    console.log(mess)
}).catch(function(err){
    console.log(err)
})
