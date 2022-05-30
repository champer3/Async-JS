// const button = document.querySelector("button");
// const header = document.querySelector("h1");

// button.addEventListener("click", () => {
//   fetch("https://api.adviceslip.com/advice")
//     .then((result) => result.json())
//     .then((data) => {
//       header.innerText = data.slip.advice;
//     });
// });

fetch("https://dog.ceo/api/breed/hound/images/random")
  .then((result) => result.json())
  .then((data) => console.log(data.message));
//   .then((data) => console.log(data));
