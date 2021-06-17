<script context="module">
  import Client from './../../utils/client';
  import PrismicDom from 'prismic-dom';
  import linkResolver from './../../linkResolver'
  

  export async function load() {
    const documentmenu = await Client.getSingle('menu')
    console.log(documentmenu)
    return {
      props: {
        document,
      }
    };
  }
</script>

<script>
  export let documentmenu;
</script>

<main>
  <div class="container">
  <h1>Hello<h1>
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