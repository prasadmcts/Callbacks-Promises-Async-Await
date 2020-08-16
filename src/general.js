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
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

getPosts();

createPost({ title: "Post three", body: "his is post three" }); // Will not this record. Due to 1 n 2 sec.
