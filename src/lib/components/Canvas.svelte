<script lang="ts">
	import { writable, derived } from 'svelte/store';
	import { onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	const frameEl: Writable<HTMLDivElement> = writable();
	let canvasEl: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;

	let w: number;
	let h: number;

	onMount(() => {
		ctx = canvasEl.getContext('2d');
	});

	const resizeCanvas = (
		canvasEl: HTMLCanvasElement | null,
		ctx: CanvasRenderingContext2D | null,
		width: number,
		height: number
	) => {
		// const dpr = window.devicePixelRatio || 1;
		const dpr = 1;
		if (canvasEl) {
			canvasEl.height = height * dpr;
			canvasEl.width = width * dpr;
		}
		if (ctx) {
			ctx.scale(dpr, dpr);
		}
	};

	// $: {
	// 	resizeCanvas(canvasEl, ctx, w, h);
	// }

	const frameSize = derived<Writable<HTMLDivElement>, [width: number, height: number]>(
		frameEl,
		($el, set) => {
			if (!$el) set([1, 1]);
			const ro = new ResizeObserver(([entry]) => {
				set([entry.contentRect.width, entry.contentRect.height]);
			});
			ro.observe($frameEl);
			return () => ro.disconnect();
		}
	);

	let dpr = window.devicePixelRatio ? window.devicePixelRatio : 2;
</script>

<!-- Every block-level element has clientWidth, clientHeight, offsetWidth and offsetHeight bindings: -->
<div class="frame" bind:this={$frameEl}>
	<canvas
		style:width="{w}px"
		style:height="{h}px"
		style:display="block"
		width={w * dpr}
		height={h * dpr}
	/>
</div>
<p>
	height: {$frameSize}
</p>

<style lang="scss">
	.frame {
		display: block;
		width: 100%;
		height: 100%;
		border: 2px solid green;
	}
	canvas {
		display: block;
		border: 2px solid red;
	}
	.resizable-canvas {
		width: height;
	}
</style>
