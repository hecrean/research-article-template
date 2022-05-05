<script lang="ts">
	import type { MarkProps } from '@portabletext/svelte';

	export let portableText: MarkProps<{ full: string }>;
</script>

<abr title={portableText.mark.full}>
	<slot />
</abr>
