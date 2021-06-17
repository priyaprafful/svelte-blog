<script>
 import PrismicDom from 'prismic-dom';
 
 export let sliceArray;
 console.log("sliceArray ::: ", sliceArray)
</script>
<main>
<div>
  {#each sliceArray as slice}<h1>helllllo</h1>
    {#if slice.slice_type === 'text_slice'}
      <p>{@html PrismicDom.RichText.asHtml(slice.primary.rich_text1)}</p>
    {:else if slice.slice_type === 'image_gallery'}
    {#each slice.items as image}
    <img src = {image.image_list.url}/>
    {/each}
    {/if}
    {/each}
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