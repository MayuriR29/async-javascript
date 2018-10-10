const posts = [
  { title: "Post 1", body: "This is post 1" },
  { title: "Post 2", body: "This is post 2" }
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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = true;
      if (!error) resolve();
      else reject("Something went wrong");
    }, 2000);
  });
}

createPost({ title: "Post 3", body: "This is post 3" })
  .then(getPosts)
  .catch(err => console.log(err));
