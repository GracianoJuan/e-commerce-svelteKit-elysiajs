<script lang="ts">
	import { page } from '$app/state';

	interface Props {
		children?: any;
	}

	let { children }: Props = $props();

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/products', label: 'Products' },
		{ href: '/about', label: 'About' }
	];
</script>

<div class="min-h-screen bg-gray-50 text-gray-900">
	<header class="sticky top-0 z-50 border-b border-gray-300/70 bg-white/60 backdrop-blur-md">
		<div class="flex w-full items-center justify-between gap-8 px-6 py-6 sm:px-10 lg:px-14">
			<a href="/" class="text-xl font-bold tracking-tight text-gray-900">Title<span class="text-blue-700">.</span></a>
			<nav class="hidden md:block">
				<ul class="flex items-center gap-5">
					{#each navItems as { href, label }}
						{@const isActive = page.url.pathname === href}
						<li>	
							<a
								{href}
								class="rounded-md px-7 py-5 text-lg font-medium transition-colors {isActive ? 'bg-gray-700 text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}"
							>
								{label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
			<div class="hidden md:block items-center space-x-2">
				<a href="/login" class="border-2 rounded-md px-5 py-2 text-lg font-semibold text-gray-600 transition hover:bg-gray-100">Login</a>
				<a href="/register" class="rounded-md bg-gray-700 px-5 py-2 text-lg font-semibold text-white transition hover:bg-gray-700/90">Register</a>
			</div>
		</div>
	</header>

	<main class="max-w-screen px-4 py-8 sm:px-6 lg:px-8 lg:py-2">
		{@render children?.()}
	</main>

	<footer class="bg-gray-700 text-white">
		<div class="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
			<div>
				<h2 class="text-lg font-bold">Centered<span class="text-blue-300">.</span></h2>
				<p class="mt-3 max-w-sm text-sm leading-6 text-gray-300">Thoughtful products for everyday progress. Built as a personal e-commerce project.</p>
			</div>
			<div>
				<h2 class="font-semibold">Explore</h2>
				<ul class="mt-3 space-y-2 text-sm text-gray-300">
					<li><a href="/products" class="transition hover:text-white">Products</a></li>
					<li><a href="/about" class="transition hover:text-white">About us</a></li>
				</ul>
			</div>
			<div>
				<h2 class="font-semibold">Contact</h2>
				<ul class="mt-3 space-y-2 text-sm text-gray-300">
					<li><a href="https://github.com/GracianoJuan" class="transition hover:text-white">Github</a></li>
					<li><a href="mailto:juangraciano1007@gmail.com" class="transition hover:text-white">Email us</a></li>
				</ul>
			</div>
		</div>
	</footer>
</div>
