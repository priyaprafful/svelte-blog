const linkResolver = (doc) => {
    // Pretty URLs for known types
    console.log("here 1",doc.type, doc.uid)
    if (doc.type === 'blog_homepage') {
     return "/" + doc.uid;
    }
    console.log("here 2",doc.type, doc.uid)
    if (doc.type === 'test_page'){
     return "/" + doc.uid;
    }
  };

  export default linkResolver;
