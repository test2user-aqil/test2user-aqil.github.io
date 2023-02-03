<script lang="ts">
	import Link from '$lib/components/Link.svelte';
	import Project from '$lib/components/Project.svelte';
	import '$lib/styles/style.css';

	import github from '$lib/icons/github-mark-white.svg';
	import twitter from '$lib/icons/twitter-logo-white.svg';
</script>

<svelte:head>
	<title>test2user-aqil</title>
	<meta property="og:title" content="test2user-aqil" />
	<meta property="og:description" content="test2user's home page" />
	<meta property="og:url" content="https://test2user-aqil.github.io/" />
	<meta property="og:image" content="https://test2user-aqil.github.io/avatar1024.png" />
	<meta name="description" content="test2user's home page" />
</svelte:head>

<div class="container header">
	<img src="/avatar1024.png" alt="Avatar" class="avatar" />

	<h1>test2user-aqil</h1>

	<div class="socials">
		<Link link="https://github.com/test2user-aqil" src={github} text="GitHub" />

		<Link link="https://twitter.com/usr0x41" src={twitter} text="Twitter" />
	</div>

	<h2><a href="#projects"> &darr; Picked projects &darr;</a></h2>
</div>

<div class="container projects">
	<h1 id="projects">Picked projects</h1>
	<div id="projects">
		<Project
			title="serguzeshti-bekar"
			link="https://github.com/test2user-aqil/serguzeshti-bekar"
			descripton="Bekarın macəraları"
		/>
		<Project
			title="wdc_baku"
			link="https://github.com/test2user-aqil/wdc_baku"
			descripton="Weather Data Collector for Baku"
		/>
	</div>
</div>

<style>
	.container {
		min-height: 100vh;
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 1rem;
		flex-direction: column;
	}
	.avatar {
		height: 200px;
		width: 200px;
		border-radius: 100%;
		filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.25));
		animation: spin 1.5s cubic-bezier(1, 0, 0, 1) 0.2s;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}
	.socials {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.projects {
		display: flex;
	}
	.projects h1 {
		margin: 3rem auto;
	}

	#projects {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}

	@keyframes spin {
		from {
			transform: rotate(-720deg);
		}
		to {
			transform: rotate(0);
		}
	}
</style>
