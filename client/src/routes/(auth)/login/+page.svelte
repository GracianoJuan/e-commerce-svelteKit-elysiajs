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
		<h2 class="text-3xl font-bold tracking-tight text-gray-900">Sign In To Your Account</h2>
	</div>

	<form action="" class="space-y-5" onsubmit={handleSubmit}>
		<div>
			<label for="email" class="mb-2 block text-sm font-semibold text-gray-700">Email address</label
			>
			<input
				type="email"
				id="email"
				name="email"
				autocomplete="email"
				required
				class="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 transition outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15"
				placeholder="you@example.com"
			/>
		</div>

		<div>
			<div class="mb-2 flex items-center justify-between gap-4">
				<label for="password" class="block text-sm font-semibold text-gray-700">Password</label>
			</div>
			<div
				class="flex rounded-lg border border-gray-300 bg-white transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/15"
			>
				<input
					type={isVisible ? 'text' : 'password'}
					id="password"
					name="password"
					autocomplete="current-password"
					required
					class="min-w-0 flex-1 rounded-lg bg-transparent px-4 py-3 text-gray-900 outline-none placeholder:text-gray-400"
					placeholder="Enter your password"
				/>
				<button
					type="button"
					onclick={toggleVisibility}
					class="px-4 text-sm font-semibold text-blue-600 hover:text-blue-700"
				>
					{isVisible ? 'Hide' : 'Show'}
				</button>
			</div>
			<a href="/" class="text-xs font-semibold text-blue-600 hover:underline">Forgot password?</a>
		</div>

		<button
			type="submit"
			class="w-full rounded-lg bg-blue-700 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700/90 focus:ring-4 focus:ring-blue-700/25 focus:outline-none"
		>
			Sign in
		</button>
		
		<!-- This section will contain another way to register using 3rd party app like github or gmail using OAuth2 -->
	</form>

	<p class="mt-7 text-center text-sm text-gray-500">
		Don't have an account?
		<a href="/register" class="font-semibold text-blue-600 hover:underline">Register</a>
	</p>
</div>
