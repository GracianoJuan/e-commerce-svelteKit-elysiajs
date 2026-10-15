<script lang="ts">
	let isVisible: boolean = $state(false);
	function toggleVisibility(): void {
		isVisible = !isVisible;
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
	}
</script>

<div>
	<div class="mb-8">
		<h2 class="text-3xl font-bold tracking-tight text-gray-900">Create an account</h2>
	</div>

	<form action="" class="space-y-5" onsubmit={handleSubmit}>
		<div>
			<label for="name" class="mb-2 block text-sm font-semibold text-gray-700">Full name</label>
			<input
				type="text"
				id="name"
				name="name"
				autocomplete="name"
				required
				class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15"
				placeholder="Your full name"
			/>
		</div>

		<div>
			<label for="email" class="mb-2 block text-sm font-semibold text-gray-700">Email address</label>
			<input
				type="email"
				id="email"
				name="email"
				autocomplete="email"
				required
				class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15"
				placeholder="you@example.com"
			/>
		</div>

		<div>
			<label for="password" class="mb-2 block text-sm font-semibold text-gray-700">Password</label>
			<div class="flex rounded-lg border border-gray-300 bg-white transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/15">
				<input
					type={isVisible ? 'text' : 'password'}
					id="password"
					name="password"
					autocomplete="new-password"
					required
					class="min-w-0 flex-1 rounded-lg bg-transparent px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400"
					placeholder="Create a password"
				/>
				<button type="button" onclick={toggleVisibility} class="px-4 text-sm font-semibold text-blue-600 hover:text-blue-700">
					{isVisible ? 'Hide' : 'Show'}
				</button>
			</div>
		</div>

		<button type="submit" class="w-full rounded-lg bg-blue-700 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700/90 focus:outline-none focus:ring-4 focus:ring-blue-700/25">
			Create account
		</button>
	</form>

	<p class="mt-7 text-center text-sm text-gray-500">
		Already have an account?
		<a href="/login" class="font-semibold text-blue-600 hover:underline">Sign in</a>
	</p>
</div>
