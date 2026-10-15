<script lang="ts">
	import imgpath from '$lib/img/harper-sunday-uRuF9ABj0NY-unsplash.jpg'
	const products = [
		{
			name: 'Center One',
			description: 'Everyday essentials, thoughtfully made.',
			price: '$499',
			image: 'https://placehold.co/900x900/eff6ff/1d4ed8?text=Center+One'
		},
		{
			name: 'Center Pro',
			description: 'More power for the way you work.',
			price: '$799',
			image: 'https://placehold.co/900x900/dbeafe/1e40af?text=Center+Pro'
		},
		{
			name: 'Center Mini',
			description: 'Small footprint. Seriously capable.',
			price: '$299',
			image: 'https://placehold.co/900x900/e0f2fe/0369a1?text=Center+Mini'
		}
	];

	const categories = [
		{ name: 'New arrivals', detail: 'Fresh ideas for every day', image: 'https://placehold.co/1200x800/3b82f6/ffffff?text=New+Arrivals' },
		{ name: 'Work essentials', detail: 'Designed to keep you moving', image: 'https://placehold.co/1200x800/2563eb/ffffff?text=Work+Essentials' }
	];
</script>

<svelte:head>
	<title>Title</title>
	<meta name="description" content="Discover accessories you might like" />
</svelte:head>

<div class="space-y-20 pb-16">
	<section class="relative isolate overflow-hidden rounded-2xl bg-gray-900 text-white shadow-sm">
		<img
			src={imgpath}
			alt=""
			class="absolute inset-0 -z-20 w-screen object-cover"
		/>
		<div class="absolute inset-0 -z-10 bg-gray-900/45"></div>
		<div class="max-w-2xl px-6 py-24 sm:px-12 sm:py-32 lg:px-16 lg:py-40">
			<p class="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-white/80">The new Center collection</p>
			<h1 class="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">Made for your next big idea.</h1>
			<p class="mt-6 max-w-lg text-base leading-7 text-white/85 sm:text-lg">Simple, capable products that fit naturally into the way you live and work.</p>
			<div class="mt-9 flex flex-wrap gap-3">
				<a href="/products" class="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">Shop collection</a>
				<a href="/about" class="rounded-lg border border-white/70 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Our story</a>
			</div>
		</div>
	</section>

	<section aria-labelledby="featured-heading">
		<div class="mb-8 flex flex-wrap items-end justify-between gap-4">
			<div>
				<p class="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Featured</p>
				<h2 id="featured-heading" class="text-3xl font-bold tracking-tight text-gray-900">Find your center.</h2>
			</div>
			<a href="/products" class="text-sm font-semibold text-blue-600 hover:underline">View all products</a>
		</div>

		<div class="grid gap-6 md:grid-cols-3">
			{#each products as product}
				<a href="/products" class="group overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
					<div class="aspect-square overflow-hidden bg-gray-100">
						<img src={product.image} alt={product.name} class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
					</div>
					<div class="p-5">
						<div class="flex items-start justify-between gap-4">
							<h3 class="text-lg font-bold text-gray-900">{product.name}</h3>
							<span class="font-semibold text-blue-700">{product.price}</span>
						</div>
						<p class="mt-2 text-sm text-gray-500">{product.description}</p>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<section aria-labelledby="categories-heading">
		<div class="mb-8">
			<p class="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Explore</p>
			<h2 id="categories-heading" class="text-3xl font-bold tracking-tight text-gray-900">Built around your day.</h2>
		</div>
		<div class="grid gap-6 md:grid-cols-2">
			{#each categories as category}
				<a href="/products" class="group relative isolate overflow-hidden rounded-xl bg-gray-900 text-white">
					<img src={category.image} alt={category.name} class="absolute inset-0 -z-20 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
					<div class="absolute inset-0 -z-10 bg-gray-900/35"></div>
					<div class="flex min-h-72 flex-col justify-end p-7 sm:min-h-80 sm:p-9">
						<h3 class="text-2xl font-bold">{category.name}</h3>
						<p class="mt-2 text-sm text-white/80">{category.detail}</p>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<section class="border-y border-gray-200 py-14" aria-labelledby="values-heading">
		<div class="grid gap-10 md:grid-cols-[1.1fr_2fr] md:gap-16">
			<div>
				<p class="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Why Centered</p>
				<h2 id="values-heading" class="text-3xl font-bold tracking-tight text-gray-900">Less noise. More possibility.</h2>
			</div>
			<div class="grid gap-8 sm:grid-cols-3">
				<div>
					<div class="mb-3 text-2xl font-bold text-blue-700">01</div>
					<h3 class="font-bold text-gray-900">Considered design</h3>
					<p class="mt-2 text-sm leading-6 text-gray-500">Everything has a purpose, from the first touch to the last detail.</p>
				</div>
				<div>
					<div class="mb-3 text-2xl font-bold text-blue-700">02</div>
					<h3 class="font-bold text-gray-900">Made to last</h3>
					<p class="mt-2 text-sm leading-6 text-gray-500">Reliable tools that stay useful as your world keeps changing.</p>
				</div>
				<div>
					<div class="mb-3 text-2xl font-bold text-blue-700">03</div>
					<h3 class="font-bold text-gray-900">People first</h3>
					<p class="mt-2 text-sm leading-6 text-gray-500">A thoughtful experience before, during, and after every purchase.</p>
				</div>
			</div>
		</div>
	</section>
</div>
