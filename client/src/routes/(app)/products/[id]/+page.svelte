<script lang="ts">
    // This variable will fetch the product meta data as description
    let testmeta = "Page product 1"

    // This variable will fetch the product name that will be the title
    let title = "Page product 1"
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={testmeta}>
</svelte:head>

<!-- 
- This will contain image, description, rating, price tag
 -->
<div></div>
