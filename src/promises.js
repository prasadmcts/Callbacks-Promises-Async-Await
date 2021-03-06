const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `${post.title} \r\n`;
    });
    console.log(output);
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false; // try with true, u get unhandled error.
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong.");
      }
    }, 2000);
  });
}

createPost({ title: "Post three", body: "his is post three" })
.then(getPosts)  // Return promise after that use then
.catch(err => console.error(err)); // we get handled nice error msg, if no actach then we get unhandled exception.
