const linkResolver = (doc) => {
    console.log("here 1",doc.type, doc.uid)
    if (doc.type === 'blog_homepage') {
     return "/"
    }
    console.log("here 2",doc.type, doc.uid)
    if (doc.type === 'test_page'){
     return "/" + doc.uid;
    }
  };

  export default linkResolver;
