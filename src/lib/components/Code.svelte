<script lang="ts">
	import type { BlockProps } from '@portabletext/svelte';

	export let portableText: BlockProps<{
		code: string;
		language: string;
	}>;

	$: block = portableText.block;
</script>

<pre>
    <p>{block.language}</p>
    <p>{block.code}</p>
</pre>

<style lang="scss">
	p {
		text-transform: uppercase;
		background-color: #444;
		color: white;
		display: inline-block;
		padding: 0.25em;
		margin: 0;
	}
</style>
