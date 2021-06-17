
<script>
  export let document;
</script>

<main>
  <div class="container">
  {@html PrismicDom.RichText.asHtml(document.data.main_title)}
Hello
</div>
</main>