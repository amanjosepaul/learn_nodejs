let a = 10;

let waitingForData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(40);
  }, 2000);
});

waitingForData.then((data) => {
  console.log(data + a);
});
