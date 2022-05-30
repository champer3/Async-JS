// // const promise = new Promise((resolve, reject) =>{
// //     setTimeout(() =>{
// //         console.log("got the user")
// //         reject(new Error("user not logged in"))
// //     }, 2000)
// // })

// // promise.then(user =>{
// //     console.log(user)
// // }).catch(err => console.log(err))

// // //Sync Code Example

// // console.log("start");

// function loginUser(email, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         userEmail: email,
//       });
//     }, 3000);
//   });
// }

// function getUserVideos(email, callback) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(["video1", "video2", "video3"]);
//     }, 2000);
//   });
// }

// function videoDetails(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("title of the video");
//     }, 2000);
//   });
// }

// // loginUser("stephen", "champs3")
// // .then(user => getUserVideos(user.email))
// // .then(videos => videoDetails(videos[0]))
// // .then(detail => console.log(detail))

// async function displayUser() {
//   try {
//     const loggedUser = await loginUser("stephen", 122343);
//     const videos = await getUserVideos(loggedUser.userEmail);
//     const detail = await videoDetails(videos[1]);
//     console.log(detail);
//   } catch (err) {
//     console.log("we could not process this");
//   }
// }

// displayUser();

// console.log("finish");

// // const user = loginUser("stephen3@gmail.com", 1234567, user =>{
// //     console.log(user)
// //     getUserVideos(user.userEmail, videos =>{
// //         console.log(videos)
// //     })
// // })

// // console.log("end");

//Async Recap
//Not all callbacks are asynchronous

console.log("start");

setTimeout(() => {
  console.log("We are in the timeOut");
}, 2000);

console.log("end");
