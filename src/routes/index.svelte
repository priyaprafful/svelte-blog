<script context="module">
  import Client from './../../utils/client';
  import linkResolver from './../../linkResolver'
  import SliceZone from './SliceZone.svelte';
 
  

  export async function load()  {
    const document = await Client.getByUID('blog_homepage','my-page', { fetchLinks: ['post.post_title', 'post.rich_text'] });
      console.log("document is",document)
      if(document){
        return {
          props: {
            document
          }
        };
      } else {
         return {
           status: 404,
           error: "Post not found",
          };
        }
    }
</script>

<script>
  export let document;
</script>

<main>
  <div class="container">
    <h1>hello</h1>
  </div>
</main>

<style>
  main {
    font-family: sans-serif;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px;
  }

  .container > * {
    width: 100%;
    max-width: 700px;
  }
</style>