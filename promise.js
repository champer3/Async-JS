const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({ user: "stephen" });
    reject(new Error("Error my G"));
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });
