function displayUsername(response) {
  // console.log(response.data[0].username);
  // response.data.forEach((user) => {
  //   console.log(user.username);
  // });

  let h2 = document.querySelector("h2");
  h2.innerHTML = `${response.data[0].username}'s email is: ${response.data[0].email}`;
}

function displayUsername10(response) {
  let h3 = document.querySelector("h3");
  h3.innerHTML = `Hi ${response.data.username}`;
}

let apiUrl = "https://jsonplaceholder.typicode.com/users";
let apiUrl1 = "https://jsonplaceholder.typicode.com/users/10";

axios.get(apiUrl).then(displayUsername); //This gives a request to the url and then use the callback function .then
axios.get(apiUrl1).then(displayUsername10);
