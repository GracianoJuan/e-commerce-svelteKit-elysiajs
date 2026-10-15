<script lang="ts">
	interface Props {
		imageSrc: string;
		altText?: string;
		title: string;
		price: number;
	}

	let { imageSrc, altText = 'Product image', title, price }: Props = $props();
</script>

<div class="bg-white border-2 shadow-md">
	<div>
		<img src={imageSrc} alt={altText}>
	</div>
	<div>{title}</div>
	<div>${price}</div>
</div>
