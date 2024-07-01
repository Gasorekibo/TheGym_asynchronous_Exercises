//Write a javascript function that displays a number every two seconds 
//and stops displaying after 5 seconds

function displayNumber() {
  const timeInterval = setInterval(() => {
    console.log("1");
  }, 2000);
  setTimeout(() => clearInterval(timeInterval), 5000);
}
displayNumber();
