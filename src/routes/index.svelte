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
	<section slot="header" class="header-section" />

	<article slot="main">
		<section class="grid">
			<h1 class:full-bleed={true}>Initial Heading</h1>
			<p>
				CLIP (<em>Contrastive Language–Image Pre-training</em>) builds on a large body of work on
				zero-shot transfer, natural language supervision, and <mark>multimodal</mark> learning. The idea
				of zero-data learning dates back over a decade
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

			<hr class:full-bleed={true} />

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

			<figure class="full-bleed">
				<img src="https://picsum.photos/200/300" />
				<figcaption>The caption of this image</figcaption>
			</figure>

			<figure class="full-bleed">
				<img src="https://picsum.photos/300/300" />
				<figcaption>The caption of this image</figcaption>
			</figure>

			<figure class="full-bleed">
				<img src="https://picsum.photos/300/800" />
				<figcaption>The caption of this image</figcaption>
			</figure>

			<div>
				CLIP (<em>Contrastive Language–Image Pre-training</em>) builds on a large body of work on
				zero-shot transfer, natural language supervision, and multimodal learning. The idea of
				zero-data learning dates back over a decade
			</div>

			<span class="sidenote-number">
				<small class="sidenote"> sidenote content </small>
			</span>

			<small> This is a small footnote type thing</small>

			<p class:left-two-thirds={true}>
				Offcentre left section : CLIP (<em>Contrastive Language–Image Pre-training</em>) builds on a
				large body of work on zero-shot transfer, natural language supervision, and multimodal
				learning. The idea of zero-data learning dates back over a decade
			</p>
			<p class:right-two-thirds={true}>
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

			<p>
				A <dfn id="def-validator">validator</dfn> is a program that checks for syntax errors in code
				or documents.
			</p>

			<p>
				You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your
				<abbr title="HyperText Markup Language">HTML</abbr>.
			</p>

			<details>
				<summary
					>I have keys but no doors. I have space but no room. You can enter but can’t leave. What
					am I?</summary
				>
				A keyboard.
			</details>

			<p>
				Simultaneously controlling multiple objects, their attributes, and their spatial
				relationships presents a new challenge. For example, consider the phrase “a hedgehog wearing
				a red hat, yellow gloves, blue shirt, and green pants.” To correctly interpret this
				sentence, DALL·E must not only correctly compose each piece of apparel with the animal, but
				also form the associations (hat, red), (gloves, yellow), (shirt, blue), and (pants, green)
				without mixing them up.
				<sup class="footnote-ref"><a href="#fn4" id="fnref4">[4]</a></sup>
				<sup class="reference-ref"><a href="#rf16" id="rfref16">16</a></sup>
			</p>

			<div class="footnotes">
				<ol class="footnotes-list">
					<li id="fn1" class="footnote-item">
						<p>
							We decided to name our model using a portmanteau of the artist Salvador Dalí and
							Pixar’s WALL·E. <a href="#fnref1" class="footnote-backref">↩︎</a>
						</p>
					</li>
					<li id="fn2" class="footnote-item">
						<p>
							A token is any symbol from a discrete vocabulary; for humans, each English letter is a
							token from a 26-letter alphabet. DALL·E’s vocabulary has tokens for both text and
							image concepts. Specifically, each image caption is represented using a maximum of 256
							BPE-encoded tokens with a vocabulary size of 16384, and the image is represented using
							1024 tokens with a vocabulary size of 8192.<br /><br />The images are preprocessed to
							256x256 resolution during training. Similar to VQVAE,<span
								class="js-rfref"
								data-id="oord-2017-vqvae"
								><sup class="reference-ref"><a href="#rf14" id="rfref14b">14</a></sup></span
							><span class="js-rfref" data-id="razavi-2019-vqvae2"
								><sup class="reference-ref grouped"><a href="#rf15" id="rfref15b">15</a></sup></span
							>
							each image is compressed to a 32x32 grid of discrete latent codes using a discrete VAE<span
								class="js-rfref"
								data-id="kingma-2013-vae"
								><sup class="reference-ref"><a href="#rf10" id="rfref10b">10</a></sup></span
							><span class="js-rfref" data-id="rezende-2014-backprop"
								><sup class="reference-ref grouped"><a href="#rf11" id="rfref11b">11</a></sup></span
							>
							that we pretrained using a continuous relaxation.<span
								class="js-rfref"
								data-id="jang-2016-gumbel"
								><sup class="reference-ref"><a href="#rf12" id="rfref12b">12</a></sup></span
							><span class="js-rfref" data-id="maddison-2016-concrete"
								><sup class="reference-ref grouped"><a href="#rf13" id="rfref13b">13</a></sup></span
							>
							We found that training using the relaxation obviates the need for an explicit codebook,
							EMA loss, or tricks like dead code revival, and can scale up to large vocabulary sizes.
							<a href="#fnref2" class="footnote-backref">↩︎</a>
						</p>
					</li>
					<li id="fn3" class="footnote-item">
						<p>
							Further details provided in <a href="#summary">a later section</a>.
							<a href="#fnref3" class="footnote-backref">↩︎</a>
						</p>
					</li>
					<li id="fn4" class="footnote-item">
						<p>
							This task is called variable binding, and has been extensively studied in the
							literature.<span class="js-rfref" data-id="smolensky-1990-tensorproduct"
								><sup class="reference-ref"><a href="#rf17" id="rfref17b">17</a></sup></span
							><span class="js-rfref" data-id="plate-1995-holographic"
								><sup class="reference-ref grouped"><a href="#rf18" id="rfref18b">18</a></sup></span
							><span class="js-rfref" data-id="ross-1998-multiplicative"
								><sup class="reference-ref grouped"><a href="#rf19" id="rfref19b">19</a></sup></span
							><span class="js-rfref" data-id="kanerva-1997-distributed"
								><sup class="reference-ref grouped"><a href="#rf20" id="rfref20b">20</a></sup></span
							> <a href="#fnref4" class="footnote-backref">↩︎</a>
						</p>
					</li>
				</ol>
			</div>
		</section>
	</article>

	<div slot="footer">Footer</div>
</Layout>

<style lang="scss">
	$h1-boxed-height: 6.3rem;

	.header-section {
		height: calc(100vh - $h1-boxed-height);
		background: linear-gradient(lightpink, #3f87a6);
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr min(60ch, calc(100% - 64px)) 1fr;
		grid-template-rows: auto;
		grid-template-areas: 'left middle right';
		margin: 0rem 2rem 0rem 2rem;
		/* grid-column-gap: 32px; */

		// by default children elements are in the central column
		& > * {
			grid-column: 2;
		}

		.grid-middle {
			grid-area: middle;
		}
		.grid-left {
			grid-area: left;
		}
		.grid-right {
			grid-area: right;
		}
		.full-bleed {
			width: 100%;
			grid-column: 1 / 4;
		}
		.left-two-thirds {
			grid-column: 1 / 3;
		}
		.right-two-thirds {
			grid-column: 2 / 4;
		}
	}

	// Content Sectioning
	article {
	}
	aside {
	}
	footer {
	}
	header {
	}
	main {
	}
	nav {
	}
	section {
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
	h3,
	h4,
	h5 {
	}

	// Text Content
	blockquote {
	}
	// - describe a reference to a cited creative work
	cite {
	}

	figure {
		display: flex;
		flex-flow: column;
		margin: auto;

		img {
			max-height: 80vh;
			object-fit: contain;
			object-position: 50% 50%;
		}
	}
	figcaption {
		text-align: center;
		padding: 3px;
	}
	p {
		font-size: 1em;
		margin: 0rem 0rem 1.4rem 0rem;
	}
	hr {
		border-top: 0.5px solid rgba(129, 123, 123, 0.5);
		margin: 2rem 0rem 2rem 0rem;
		padding: 0;
		height: 0px;
		width: 100%;
	}

	// Inline text semantics
	a {
		background-color:transparent
			&:not(.btn):not(.no-style):not(.faded):not(.faded-heavy):not(.faded-light):not(.faded-xlight):not(.faded-xxlight):hover {
			opacity: 0.6 !important;
		}
	}
	// - represents an abbreviation or acronym; the optional title attribute can provide an expansion or description for the abbreviation
	abbr {
	}
	b {
	}
	dfn {
	}
	em {
	}
	i {
	}
	mark {
	}
	q {
	}
	s {
	}
	small {
		font-family: Helvetica, sans-serif;
		font-size: 0.75rem;
	}
	strong {
	}
	sub,
	sup {
		font-family: Helvetica, sans-serif;
		font-size: 0.75rem;
		font-weight: unset;
		letter-spacing: unset;
		font-size: 0.6666666667em;
		line-height: 0;
	}
	sup {
		top: -0.5em;
	}

	// Image / Multimedia
	.img-with-overlay {
		display: flex;
		flex-direction: column;
		position: relative;

		.overlay {
			position: absolute;
			top: 1rem;
			left: 1rem;
		}
	}
	.aspect-ratio-constrained {
		$aspect-ratio: var(--aspect-ratio);
		// Set the variable to false only if it's not already set.
		$aspect-ratio: auto !default;

		@supports (aspect-ratio: $aspect-ratio) {
			aspect-ratio: $aspect-ratio;
		}
		@supports not (aspect-ratio: $aspect-ratio) {
			//another way of enforcing apsect ratio is the following trick:
			padding-bottom: calc(100 / $aspect-ratio);
		}
	}

	// Demarcating edits
	del,
	ins {
		display: block;
		text-decoration: none;
		position: relative;
	}

	del {
		background-color: #fbb;
	}

	ins {
		background-color: #d4fcbc;
	}

	del::before,
	ins::before {
		position: absolute;
		left: 0.5rem;
		font-family: monospace;
	}

	del::before {
		content: '−';
	}

	ins::before {
		content: '+';
	}

	// Table Content

	// Forms
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

	// Interactove

	dialog {
	}

	.accordion {
	}

	summary {
		cursor: pointer;
		list-style: none;
		transition: all 0.5s ease;
		&:hover {
			cursor: pointer;
			background-color: grey;
		}
	}
	details {
		&[open] {
			summary {
			}
		}
	}

	// Defined Elements
	.footnotes-list {
		margin-bottom: 0 !important;
	}

	.footnote-ref,
	.refererence-ref {
		margin-left: 0.05em;
		margin-right: 0.05em;

		.grouped {
			margin-left: -0.05em;
			&:before {
				content: ',';
			}
		}
		a {
			text-decoration: none !important;
			background-color: transparent;
		}
	}

	.footnotes {
		.footnotes-list {
		}
		.footnote-item {
		}

		.footnote-backref {
			text-decoration: underline;
			text-decoration-thickness: 1px;
			text-underline-offset: 0.05em;
		}
	}
	.references {
		.references-list {
		}
		.reference-item {
		}
		.reference-backref {
			text-decoration: underline;
			text-decoration-thickness: 1px;
			text-underline-offset: 0.05em;
		}
	}

	.hstack {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;
	}
	.vstack {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.spacer {
		flex-grow: 1000;
		height: 100%;
		width: 100%;
	}

	.tab {
	}
	.tooltip {
	}
</style>
