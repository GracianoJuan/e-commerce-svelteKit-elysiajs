<script lang="ts">
	interface Props {
		children?: any;
	}
	let { children }: Props = $props();
</script>

<main class="min-h-screen bg-gray-50">
	<div class="grid min-h-screen w-full sm:grid-cols-2">
		<div class="relative hidden overflow-hidden bg-blue-500 p-10 text-white sm:flex sm:flex-col sm:justify-between lg:p-14">
			<div class="relative z-10 flex items-center gap-3 text-lg font-bold tracking-tight">
				<span class="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-500">C</span>
				Centered
			</div>

			<div class="relative z-10 max-w-md pb-8">
				<p class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/75">Welcome</p>
				<h1 class="text-4xl font-bold leading-tight lg:text-5xl">Text something about the website</h1>
			</div>

			<div class="absolute -bottom-24 -left-16 h-64 w-64 rounded-full border-32 border-white/15"></div>
			<div class="absolute -right-20 top-16 h-48 w-48 rounded-full border-24 border-white/15"></div>
		</div>

		<div class="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-20">
			<div class="w-full max-w-md rounded-2xl bg-white p-7 shadow-sm sm:p-10">
				{@render children?.()}
			</div>
		</div>
	</div>
</main>
