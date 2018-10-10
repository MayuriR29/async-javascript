const posts = [
  { title: "Post one", body: "This is the body of post 1" },
  { title: "Post two", body: "This is the body of post 2" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((eachPost, index) => {
      output += `<li key=${index}>${eachPost.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
createPost(
  { title: "Post three", body: "This is the body of post 3" },
  getPosts
);
