<script lang="ts">
	let items = [];
	let _refs: Array<HTMLSpanElement> = [];
	$: refs = _refs.filter(Boolean);
</script>

{#each refs as ref}
	<mark bind:this={ref} />
{/each}
