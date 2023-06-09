<script lang="ts">
	import '$lib/styles/style.css';
	import Hero from '$lib/components/Hero.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<svelte:head>
	<title>test2user-aqil</title>
	<meta property="og:title" content="test2user-aqil" />
	<meta property="og:description" content="test2user's home page" />
	<meta property="og:url" content="https://test2user-aqil.github.io/" />
	<meta property="og:image" content="https://test2user-aqil.github.io/avatar1024.png" />
	<meta name="description" content="test2user's home page" />
</svelte:head>

<Hero />

<div class="container">
	<h2 id="#projects">Projects:</h2>

	<div class="projects">
		<ProjectCard
			title="wdc_baku"
			link="https://github.com/test2user-aqil/wdc_baku"
			descripton="Stay on top of Baku's weather with the Weather Data Collector for Baku"
		/>
		<ProjectCard
			title="dotfiles"
			link="https://github.com/test2user-aqil/dotfiles"
			descripton="A collection of my configuration files, also known as dotfiles"
		/>
	</div>
</div>

<style>
	/**
	 * Container
	 */

	.container {
		max-width: 800px;
		margin: 16px auto 0;
	}
	.container h2 {
		padding: 16px;
	}

	/**
	 * Projects
	 */

	.projects {
		display: flex;
		padding: 16px;
		flex-wrap: wrap;
		gap: 8px;
	}
</style>
