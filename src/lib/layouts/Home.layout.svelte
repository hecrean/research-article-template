<script lang="ts">
	export let leftSidebarOpen: boolean;
</script>

<!-- <svelte:body/> -->

<div class="layout">
	<aside class="sidebar" class:sidebar-open={leftSidebarOpen} />
	<div class="body">
		<header class="header-slot">
			<slot name="header">No Header was provided</slot>
		</header>
		<main class="main-slot">
			<slot name="main">No Main was provided</slot>
		</main>
		<footer class="footers-lot">
			<slot name="footer">No Footer was provided</slot>
		</footer>
	</div>
</div>

<style lang="scss">
	:global(:root) {
		html,
		body,
		div,
		span,
		applet,
		object,
		iframe,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		p,
		blockquote,
		pre,
		a,
		abbr,
		acronym,
		address,
		big,
		cite,
		code,
		del,
		dfn,
		em,
		img,
		ins,
		kbd,
		q,
		s,
		samp,
		small,
		strike,
		strong,
		sub,
		sup,
		tt,
		var,
		dl,
		dt,
		dd,
		ol,
		ul,
		li,
		fieldset,
		form,
		label,
		legend,
		table,
		caption,
		tbody,
		tfoot,
		thead,
		tr,
		th,
		td,
		article,
		aside,
		canvas,
		details,
		embed,
		figure,
		figcaption,
		footer,
		header,
		hgroup,
		main,
		menu,
		nav,
		output,
		ruby,
		section,
		summary,
		time,
		mark,
		audio,
		video {
			margin: 0;
			padding: 0;
			border: 0;
			vertical-align: baseline;
		}
		article,
		aside,
		details,
		figcaption,
		figure,
		footer,
		header,
		hgroup,
		main,
		menu,
		nav,
		section {
			display: block;
		}
		body {
			line-height: 1rem;
		}
		ol,
		ul {
			list-style: none;
		}
		blockquote,
		q {
			quotes: none;
		}
		blockquote:before,
		blockquote:after,
		q:before,
		q:after {
			content: '';
			content: none;
		}
		table {
			border-spacing: 0;
			border-collapse: collapse;
		}
	}
	:global(body),
	:global(html) {
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
		overscroll-behavior: none;
	}
	:global(body) {
		font-family: Charter, Georgia, serif;
		line-height: 1.4;
		letter-spacing: 0;
		background-color: #fff;
		color: #191927;
		font-size: 1em;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-weight: normal;
		word-wrap: break-word;
		overflow-x: hidden;
	}
	/***
	* Layout 
	**/

	.layout {
		width: 100%;
		height: 100%;

		display: grid;
		grid:
			'sidebar body' 1fr
			/ auto 1fr;
	}

	.sidebar {
		grid-area: sidebar;
		width: 0rem;
		background-color: red;
	}
	.sidebar-open {
		min-width: 10rem;
	}

	.body {
		grid-area: body;
	}

	.header-slot {
	}

	.main-slot {
		padding: 0rem 2rem 0rem 2rem;
	}

	.footer-slot {
	}
</style>
