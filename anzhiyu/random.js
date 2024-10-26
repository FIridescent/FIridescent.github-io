var posts=["2024/10/26/hello-world/","2024/10/26/自我介绍/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };