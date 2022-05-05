<script context="module">
</script>

<script lang="ts">
	import Layout from '$layouts/Home.layout.svelte';
	import { layoutState } from '$lib/stores/layout.store';
</script>

<svelte:head>
	<title>3D Web</title>
	<meta name="Description" content="Experiments with Web based 3D Apps" />
</svelte:head>

<Layout leftSidebarOpen={$layoutState.sidebarOpen}>
	<section slot="header" class:peak-height={true} class="header-section">
		<img
			class:full-bleed={true}
			alt="CLIP: Connecting Text and Images"
			src="https://cdn.openai.com/research-covers/clip/2x-no-mark.jpg"
		/>
	</section>

	<article slot="main" class="content">
		<section class="content-section">
			<h1 class:full-bleed={true}>Initial Heading</h1>
			<p>
				CLIP (<em>Contrastive Language–Image Pre-training</em>) builds on a large body of work on
				zero-shot transfer, natural language supervision, and multimodal learning. The idea of
				zero-data learning dates back over a decade
			</p>

			<figure class:full-bleed={true}>
				<img
					alt="CLIP: Connecting Text and Images"
					src="https://cdn.openai.com/research-covers/clip/2x-no-mark.jpg"
				/>
				<figcaption>Fig1. - Trulli, Puglia, Italy.</figcaption>
			</figure>

			<caption />

			<cite />

			<summary />
			<details />

			<abbr />

			<blockquote />

			<dl>
				<dd />
				<dt />
			</dl>

			<dialog />

			<hr />

			<p class:full-bleed={true}>
				CLIP (<em>Contrastive Language–Image Pre-training</em>) builds on a large body of work on
				zero-shot transfer, natural language supervision, and multimodal learning. The idea of
				zero-data learning dates back over a decade
			</p>
			<p>
				CLIP (<em>Contrastive Language–Image Pre-training</em>) builds on a large body of work on
				zero-shot transfer, natural language supervision, and multimodal learning. The idea of
				zero-data learning dates back over a decade
			</p>

			<p class:full-bleed={true}>
				CLIP (<em>Contrastive Language–Image Pre-training</em>) builds on a large body of work on
				zero-shot transfer, natural language supervision, and multimodal learning. The idea of
				zero-data learning dates back over a decade
			</p>

			<!-- <p class:footnote-aside={true}>
				This is a sidenote ... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
				imperdiet sagittis laoreet. Pellentesque accumsan
			</p> -->

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet sagittis laoreet.
				Pellentesque accumsan est quis lorem consectetur efficitur. In vel nibh et felis tempus
				condimentum. Vestibulum suscipit massa metus, non tincidunt est volutpat ac. Curabitur vitae
				viverra mauris. Maecenas non ultrices orci, non faucibus dui. Proin a aliquet velit.
				Suspendisse ac sapien eu mi venenatis accumsan a sit amet arcu. Aliquam vitae velit orci.
				Aliquam pulvinar vitae quam a scelerisque. Nam mollis tellus vel iaculis imperdiet. Donec
				maximus egestas bibendum. Aliquam quis libero ac est finibus consectetur. Aenean mollis eu
				lacus non porttitor. In feugiat accumsan efficitur. Nam lobortis facilisis orci, id placerat
				ex faucibus in. Vivamus mattis tempus ex, et gravida justo. Aliquam venenatis imperdiet
				consectetur. Curabitur mattis lobortis venenatis. Aenean eget ante risus. Nam luctus nisi
				massa, ac facilisis ex tempor vel. Donec iaculis, quam a iaculis suscipit, quam enim
				dignissim nulla, id semper nibh dui quis nulla. Nunc augue orci, varius in ultrices a,
				fermentum vitae leo. Nam blandit cursus porta. Aenean fringilla pretium nibh, quis euismod
				risus bibendum ac. In pulvinar odio sem. Nunc vitae dui hendrerit justo cursus tincidunt.
				Nunc sed fringilla tellus. Aenean consequat sapien tellus, a luctus arcu ultricies nec.
				Quisque pulvinar turpis quis erat consectetur, ac rutrum ligula iaculis. Fusce sagittis
				magna leo, at viverra nisi pellentesque nec. In enim ex, luctus sit amet neque eget,
				pellentesque mattis nisl. In eu elementum eros. Praesent venenatis egestas velit, id pretium
				tellus gravida non.
			</p>
		</section>

		<section class="content-section">
			<p>
				CLIP (<em>Contrastive Language–Image Pre-training</em>) builds on a large body of work on
				zero-shot transfer, natural language supervision, and multimodal learning. The idea of
				zero-data learning dates back over a decade
			</p>

			<p class:full-bleed={true}>
				CLIP (<em>Contrastive Language–Image Pre-training</em>) builds on a large body of work on
				zero-shot transfer, natural language supervision, and multimodal learning. The idea of
				zero-data learning dates back over a decade
			</p>
			<p>
				CLIP (<em>Contrastive Language–Image Pre-training</em>) builds on a large body of work on
				zero-shot transfer, natural language supervision, and multimodal learning. The idea of
				zero-data learning dates back over a decade
			</p>

			<p class:full-bleed={true}>
				CLIP (<em>Contrastive Language–Image Pre-training</em>) builds on a large body of work on
				zero-shot transfer, natural language supervision, and multimodal learning. The idea of
				zero-data learning dates back over a decade
			</p>
			<button> Button test </button>
		</section>
	</article>

	<div slot="footer">Footer</div>
</Layout>

<style lang="scss">
	$h1-boxed-height: 6.3rem;

	.full-height {
		height: 100vh;
	}
	.peak-height {
		height: calc(100vh - $h1-boxed-height);
	}

	.header-section {
		background-color: lightpink;
	}

	.content {
	}

	.content-section {
		display: grid;
		grid-template-columns: 1fr min(60ch, calc(100% - 64px)) 1fr;
		margin: 0rem 2rem 0rem 2rem;
		/* grid-column-gap: 32px; */

		// by default children elements are in the central column
		& > * {
			grid-column: 2;
		}

		.full-bleed {
			width: 100%;
			grid-column: 1 / 4;
		}

		.footnote-aside {
			font-family: ColfaxAI, Helvetica, sans-serif;
			font-size: 0.75rem;
			font-weight: unset;
			letter-spacing: unset;
			color: rgba(25, 25, 39, 0.5);
			display: none;
			margin-top: calc(-1.4em - 2px);
		}
		@media (min-width: 720px) {
			.footnote-aside {
				transform: translateX(100%);
			}
		}
		@media (min-width: 720px) {
			.footnote-aside {
				display: block;
			}
		}

		h1 {
			margin: 0rem -2rem 0rem -2rem;
			padding: 3.5rem 2rem 1.8rem 2rem;
			position: sticky;
			top: 0rem;
			background-color: white;
		}

		h2 {
			margin-top: 2.8rem;
			margin-bottom: 0.7rem;
		}

		p {
			font-size: 1em;
			margin: 0rem 0rem 1.4rem 0rem;
		}

		hr {
			opacity: 0.1;
			border: 0;
			margin: 0;
			padding: 0;
			width: 100%;
			height: 1px;
			background-color: currentColor;
			box-sizing: content-box;
			height: 0;
			overflow: visible;
		}

		.footnote {
		}
		.refererence {
		}

		a {
			background-color:transparent
				&:not(.btn):not(.no-style):not(.faded):not(.faded-heavy):not(.faded-light):not(.faded-xlight):not(.faded-xxlight):hover {
				opacity: 0.6 !important;
			}
		}

		button {
			cursor: pointer;
			color: inherit;
			background-color: inherit;
			display: inline-block;
			border: 0;
			border-radius: 4px;
			padding: 0;
			font-family: ColfaxAI, Helvetica, sans-serif;
			font-size: 0.6666666667rem;
			letter-spacing: 0.05em;
			font-weight: bold;
			text-transform: uppercase;
			text-decoration: none !important;
		}

		img {
			display: flex;
			flex-direction: column;

			position: relative;
			max-height:60vh;			
			/* margin: 0 auto 0 auto; */


			/* 
			@supports (aspect-ratio: $aspect-ratio) {
  				aspect-ratio: $aspect-ratio;
			}
			@supports not (aspect-ratio: $aspect-ratio) {
  				//nother way of enforcing apsect ratio is the following trick:
  				padding-bottom: calc(100 /  $aspect-ratio);
			} */

			.overlay {
				position: absolute;
				top: 1rem;
				left: 1rem;
			}
		}
	}
</style>
