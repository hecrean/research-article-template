<script lang="ts" context="module">
	export interface FootnoteType {
		_key: string;
		note: BlockProps;
	}
</script>

<script lang="ts">
	import type { MarkProps, BlockProps } from '@portabletext/svelte';

	export let portableText: MarkProps<
		FootnoteType,
		// Use the second argument to specify your context's type
		{
			footnotes: FootnoteType[];
		}
	>;

	// From the context, let's figure out what's the position of this footnote
	$: number =
		portableText.context.footnotes.findIndex((note) => note._key === portableText.mark._key) + 1;
</script>

<span id="src-{portableText.mark._key}">
	<slot /><sup><a href={`#note-${portableText.mark._key}`}>{number}</a></sup>
</span>
